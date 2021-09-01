import { initializeApp } from 'firebase/app'
import { enableIndexedDbPersistence, doc, initializeFirestore, CACHE_SIZE_UNLIMITED } from 'firebase/firestore'
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
const firestore = initializeFirestore(firebaseApp, {
  cacheSizeBytes: CACHE_SIZE_UNLIMITED
});

enableIndexedDbPersistence(firestore)
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      console.log('Multiple tabs open, persistence can only be enabled in one tab at a a time.');
    } else if (err.code === 'unimplemented') {
      console.log('The current browser does not support all of the features required to enable persistence.');
    }
  });;
export default firestore;
const analytics = getAnalytics(firebaseApp);