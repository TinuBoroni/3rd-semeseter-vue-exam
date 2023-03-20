import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3AoOGfAMdV4xMK9A4dsC-efRXS4gzSFI",
  authDomain: "codeschool-67536.firebaseapp.com",
  projectId: "codeschool-67536",
  storageBucket: "codeschool-67536.appspot.com",
  messagingSenderId: "431379352806",
  appId: "1:431379352806:web:851af27bc95162d2f63f27",
  measurementId: "G-EXK8W3W65R",
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");
