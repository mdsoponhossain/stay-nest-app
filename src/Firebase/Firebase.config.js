// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyfk0q0lyUOLU4yyoZBVD_PNpvhuuRoNw",
  authDomain: "stay-nest.firebaseapp.com",
  projectId: "stay-nest",
  storageBucket: "stay-nest.appspot.com",
  messagingSenderId: "968672603842",
  appId: "1:968672603842:web:c4bde55a0a94ecbf8b155b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;