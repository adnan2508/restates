import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDPPFCj-eukfyLRCbV_Gj59ecIZjn8g6uU",
  authDomain: "restates-75179.firebaseapp.com",
  projectId: "restates-75179",
  storageBucket: "restates-75179.appspot.com",
  messagingSenderId: "645242710434",
  appId: "1:645242710434:web:4aefca46cc3cfdfa412afb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;