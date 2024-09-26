// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import App from "./App.vue";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXAqdWBfrgFvlOLb9aJErfKqIYu5yl27M",
  authDomain: "fir-auth-c57e0.firebaseapp.com",
  projectId: "fir-auth-c57e0",
  storageBucket: "fir-auth-c57e0.appspot.com",
  messagingSenderId: "338437123948",
  appId: "1:338437123948:web:b2bafded816eb34c594d49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app