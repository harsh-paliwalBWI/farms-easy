import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDBLMCviadHAy03P343IHyAru4hgqWwZDo",
  authDomain: "bwi-emb-farmacy.firebaseapp.com",
  projectId: "bwi-emb-farmacy",
  storageBucket: "bwi-emb-farmacy.appspot.com",
  messagingSenderId: "385543703030",
  appId: "1:385543703030:web:d3274290148197a0d1dfd7",
  measurementId: "G-CV9X7JHWRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app)