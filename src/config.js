// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCJaFqLao8pEOAlDoG_BntnhrkBnjl6T6Q",
    authDomain: "pokeempire-609b1.firebaseapp.com",
    projectId: "pokeempire-609b1",
    storageBucket: "pokeempire-609b1.appspot.com",
    messagingSenderId: "4566429133",
    appId: "1:4566429133:web:5010b9067badb9f30ee884"  
};
  
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;