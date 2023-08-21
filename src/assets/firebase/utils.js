import {
    auth
} from "./firebase";
import {
    usersCollection
} from "./firebase";
import {
    addDoc,
    query,
    where,
    getDocs
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

export function uploadMedia(file) {

    if (!file) return
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    return uploadTask;
}