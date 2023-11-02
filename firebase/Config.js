import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, onSnapshot, serverTimestamp, orderBy} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

initializeApp(firebaseConfig);

const firestore = getFirestore()
const MESSAGES = 'messages'

export {
    firestore, collection, addDoc, MESSAGES, query, onSnapshot, serverTimestamp, orderBy
};
