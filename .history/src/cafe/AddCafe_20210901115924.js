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
      drinks: 5
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      city: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      pincode: Yup.string().required('Required'),
      drinks: Yup.string().required('Required'),
    }),
    onSubmit: async (data, { resetForm }) => {
      try {
        const docRef = await addDoc(collection(firestore, "cafes"), data);
        console.log("Document written with ID: ", docRef.id);
        resetForm()
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  });

  return (<>AddCafe</>);
}