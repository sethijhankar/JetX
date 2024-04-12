import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAe6QWHwKhEunX8ULUSl9AYdXbyQnwIWs",
    authDomain: "fasjet.firebaseapp.com",
    projectId: "fasjet",
    storageBucket: "fasjet.appspot.com",
    messagingSenderId: "982483240549",
    appId: "1:982483240549:web:79ead7f4e33bdd4c59688c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;