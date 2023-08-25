import {
    auth
} from "./firebase";
import {
    db,
    usersCollection
} from "./firebase";
import {
    doc,
    addDoc,
    query,
    where,
    getDocs,
    updateDoc,
    arrayUnion,
    arrayRemove
} from "firebase/firestore"
import {
    storage
} from "./firebase";
import {
    ref,
    uploadBytesResumable,
    getDownloadURL
} from "firebase/storage"

export async function createNewUser(creds) {
    try {
        await addDoc(usersCollection, creds);
    } catch (err) {
        throw new Error("Can't add user, try later!")
    }
}

export async function getAccountByUid(uid) {
    const queryParams = query(usersCollection, where("auth.uid", "==", uid));
    const snapShot = await getDocs(queryParams);
    const userObj = snapShot.docs.map(doc => doc.data());
    return userObj;
}

export function uploadMedia(filePath, file, postCaption) {
    if (!file) return
    const storageRef = ref(storage, `${filePath}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.then((taskInfo) => addPost(taskInfo.ref.fullPath, postCaption))
    return uploadTask;
}

async function addPost(filePath, caption) {
    const userQuery = query(usersCollection, where("auth.email", "==", auth.currentUser.email));
    const docRef = (await getDocs(userQuery)).docs[0].ref;
    const downloadUrl = await downloadMedia(filePath);
    console.log('updating...')
    await updateDoc(docRef, {
        "summary.posts": arrayUnion({
            likes: 0,
            dataUploaded: Date(),
            comments: [],
            caption,
            url: downloadUrl,
        })
    })
}

async function downloadMedia(filePath) {
    const imgRef = ref(storage, filePath);
    const url = await getDownloadURL(imgRef).then(url => url);
    return url;
}

export async function updateFollowingsByAddingNew(creds) {
    try {
        const userQuery = query(usersCollection, where("auth.email", "==", auth.currentUser.email));
        const docRef = (await getDocs(userQuery)).docs[0].ref;
        await updateDoc(docRef, {
            "summary.followings": arrayUnion(creds)
        })
        await updateFollowersByAddingNew(creds)
    } catch (err) {
        throw new Error("Fail to Follow")
    }
}

export async function updateFollowingsByRemovingFollower(creds) {
    try {
        const userQuery = query(usersCollection, where("auth.email", "==", auth.currentUser.email));
        const docRef = (await getDocs(userQuery)).docs[0].ref;
        await updateDoc(docRef, {
            "summary.followings": arrayRemove(creds)
        })
        await updateFollowingsByRemoveingOne(creds);
    } catch (err) {
        throw new Error("Fail to unfollow")
    }
}

async function updateFollowersByAddingNew(usersCreds) {
    const userQuery = query(usersCollection, where("auth.email", "==", usersCreds.followed));
    const docRef = (await getDocs(userQuery)).docs[0].ref;
    const creds = {
        followedBy: auth.currentUser.email
    }
    await updateDoc(docRef, {
        "summary.followers": arrayUnion(creds)
    })
}

async function updateFollowingsByRemoveingOne(usersCreds) {
    const userQuery = query(usersCollection, where("auth.email", "==", usersCreds.followed));
    const docRef = (await getDocs(userQuery)).docs[0].ref;
    const creds = {
        followedBy: auth.currentUser.email
    }
    await updateDoc(docRef, {
        "summary.followers": arrayRemove(creds)
    })
}