import React from 'react';
import { collection, addDoc } from "firebase/firestore";
import firestore from './firebase';

import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AddCafe() {

  const formik = useFormik({
    initialValues: {
      name: '',
      city: '',
      pincode: '',
      drinks: '5'
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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