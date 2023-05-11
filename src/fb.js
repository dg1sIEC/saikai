import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7VyHoTSd4NtPXW8PDYVMaaMZ-HxnM2Fk",
  authDomain: "saikai-18963.firebaseapp.com",
  projectId: "saikai-18963",
  storageBucket: "saikai-18963.appspot.com",
  messagingSenderId: "143044415499",
  appId: "1:143044415499:web:c6027618411cbee191b70e",
  measurementId: "G-BT9MBMZD5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;