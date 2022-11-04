// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOqFWB0RcsxSfEhhdtiRdr4en6LvZA3oo",
  authDomain: "burg3rqu33n.firebaseapp.com",
  projectId: "burg3rqu33n",
  storageBucket: "burg3rqu33n.appspot.com",
  messagingSenderId: "17533634652",
  appId: "1:17533634652:web:eeb1d53fef6ae8ba7a3e99",
  measurementId: "G-CGR9M98HWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;