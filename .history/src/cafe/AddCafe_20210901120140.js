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

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>);
}