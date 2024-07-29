// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCMGvWXW8eX1KvTeuS8lL7d1GOD1cn0S5E",
    authDomain: "restaurent-f92a1.firebaseapp.com",
    projectId: "restaurent-f92a1",
    storageBucket: "restaurent-f92a1.appspot.com",
    messagingSenderId: "173624537765",
    appId: "1:173624537765:web:a93aedbc60e3da8eda534c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
