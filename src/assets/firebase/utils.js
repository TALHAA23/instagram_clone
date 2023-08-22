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
    arrayUnion
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

export async function getAccountByEmail(email) {
    const queryParams = query(usersCollection, where("auth.email", "==", email));
    const snapShot = await getDocs(queryParams);
    const userObj = snapShot.docs.map(doc => doc.data());
    return userObj;
}

export function uploadMedia(filePath, file) {
    if (!file) return
    const storageRef = ref(storage, `${filePath}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    return uploadTask;
}

export async function downloadMedia(fileName) {
    const imgRef = ref(storage, `${auth.currentUser.email}/posts/${fileName}`);
    const url = await getDownloadURL(imgRef).then(url => url);
    return url;
}

export async function addPost(fileName, caption) {
    const userQuery = query(usersCollection, where("auth.email", "==", auth.currentUser.email));
    const docRef = (await getDocs(userQuery)).docs[0].ref;
    const downloadUrl = await downloadMedia(fileName);
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