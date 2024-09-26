// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-uJAw4PAuoNoKHg4Ij2CniJ65JzFO8HY",
  authDomain: "vite-firebase-app-6152a.firebaseapp.com",
  projectId: "vite-firebase-app-6152a",
  storageBucket: "vite-firebase-app-6152a.appspot.com",
  messagingSenderId: "239282926762",
  appId: "1:239282926762:web:80db5d7c2ce14b90ae4cd3"
};

let firebaseApp;

export function initializeFirebase() {
  if(!firebaseApp) {
    firebaseApp = initializeApp(firebaseConfig);
  }
  return firebaseApp;
}
