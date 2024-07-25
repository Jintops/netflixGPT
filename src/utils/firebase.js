// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCisSjGtbBsJxKFhB2xgpUeLCtXodtuiUg",
  authDomain: "netflixgpt-69cbf.firebaseapp.com",
  projectId: "netflixgpt-69cbf",
  storageBucket: "netflixgpt-69cbf.appspot.com",
  messagingSenderId: "983999943007",
  appId: "1:983999943007:web:d662d432acd785ef38a6ea",
  measurementId: "G-MRXJMQ1264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();