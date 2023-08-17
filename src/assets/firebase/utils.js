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
} from 'firebase/firestore'


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