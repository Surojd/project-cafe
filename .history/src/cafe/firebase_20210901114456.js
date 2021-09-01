import { initializeApp } from 'firebase/app'
import { getFirestore, doc } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";


const firebaseApp = initializeApp({
  apiKey: "AIzaSyBF1CMLc0WfG_majkcPFVm9eU-DCqGW9BM",
  authDomain: "project-cafe-d8aca.firebaseapp.com",
  projectId: "project-cafe-d8aca",
  storageBucket: "project-cafe-d8aca.appspot.com",
  messagingSenderId: "531282317018",
  appId: "1:531282317018:web:25d8fc0f088be0c68d5fe3",
  measurementId: "G-GNS7C6HN2Y"
});
export const firestore = getFirestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);