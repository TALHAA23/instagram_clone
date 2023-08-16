import {
    auth
} from "./firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'

// login
export async function signInUser(creds) {
    try {
        await signInWithEmailAndPassword(auth, creds.email, creds.password)
    } catch (err) {
        throw new Error(err.message)
    }
}

export async function signOutUser() {
    try {
        await auth.signOut()
    } catch (err) {
        throw new Error(err.message)
    }
}


// signup

export async function signupUser(creds) {
    try {
        await createUserWithEmailAndPassword(auth, creds.email, creds.password)
    } catch (err) {
        throw new Error(err.message)
    }
}