// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js"
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
//const firebaseConfig = {
//  apiKey: "AIzaSyDtDoR0DeGsxmk1qTLlhbXrwoHJvB-JsRw",
// authDomain: "ryosouru.firebaseapp.com",
// projectId: "ryosouru",
//  storageBucket: "ryosouru.appspot.com",
//  messagingSenderId: "1059385977555",
//  appId: "1:1059385977555:web:f5158d956f0929952c8226"
//};

const firebaseConfig = {
  apiKey: "AIzaSyC4fzJ4E9mxe0RV-n0LSXdFuM_R9QNavp8",
  authDomain: "rysoruru-79089.firebaseapp.com",
  projectId: "rysoruru-79089",
  storageBucket: "rysoruru-79089.appspot.com",
  messagingSenderId: "702440112873",
  appId: "1:702440112873:web:08ba57d38e99d366fe2678"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)