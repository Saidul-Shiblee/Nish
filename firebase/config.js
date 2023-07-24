import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBT5Cp69kwbNdfxnawHyPKxcd6v-ciPRk",

  authDomain: "nish-8fc01.firebaseapp.com",

  projectId: "nish-8fc01",

  storageBucket: "nish-8fc01.appspot.com",

  messagingSenderId: "1006816984784",

  appId: "1:1006816984784:web:55600181fd36acc444e8d5",

  measurementId: "G-Y0RPW2XYEX",
};


const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
const { FieldValue } = firebase.firestore;

export { app, auth, projectStorage, projectFirestore, timestamp, FieldValue };
