// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";
import {
    getAuth
} from "firebase/auth";
import {
    getFirestore,
    collection,
} from "firebase/firestore"
import {
    getStorage
} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDxB4rssVl4lef2FaBGdd4_3tG6Kk0f_OU",
    authDomain: "insta-clone-24260.firebaseapp.com",
    projectId: "insta-clone-24260",
    storageBucket: "insta-clone-24260.appspot.com",
    messagingSenderId: "868196785145",
    appId: "1:868196785145:web:9ee0d77eb39fd1ea843b28",
    measurementId: "G-524L2LSFXN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const usersCollection = collection(db, 'users');
export const auth = getAuth()
export const storage = getStorage(app);