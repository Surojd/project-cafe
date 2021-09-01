import React from 'react';
import { collection, addDoc } from "firebase/firestore";
import firestore from './firebase';

export default function AddCafe() {
  const addCafe = async (data) => {
    try {
      const docRef = await addDoc(collection(firestore, "cafes"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }
  return (<>AddCafe</>);
}