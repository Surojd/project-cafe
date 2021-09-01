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
      drinks: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      city: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      pincode: Yup.number().required('Required'),
      drinks: Yup.string().required('Required'),
    }),
    onSubmit: async (data, { resetForm }) => {
      try {
        const docRef = await addDoc(collection(firestore, "cafes"), data);
        alert("Document written with ID: " + docRef.id);
        resetForm()
      } catch (e) {
        alert("Error adding document: " + e);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Cafe Name</label>
      <input
        id="name"
        type='text'
        {...formik.getFieldProps('name')}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="city">City</label>
      <input
        id="city"
        type='text'
        {...formik.getFieldProps('city')}
      />
      {formik.touched.city && formik.errors.city ? (
        <div>{formik.errors.city}</div>
      ) : null}

      <label htmlFor="pincode">Pincode</label>
      <input
        id="pincode"
        type='number'
        {...formik.getFieldProps('pincode')}
      />
      {formik.touched.pincode && formik.errors.pincode ? (
        <div>{formik.errors.pincode}</div>
      ) : null}
      <label>Drinks</label>
      <label class="radio-label">One
        <input type="radio" checked="checked" name="radio" />
        <span class="checkmark"></span>
      </label>
      <label class="radio-label">Two
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
      </label>

      <input
        type='radio'
        {...formik.getFieldProps('drinks')}
        value="5 Drinks"
      />5 Drinks
      <input
        type='radio'
        {...formik.getFieldProps('drinks')}
        value="5+ Drinks"
      />5+ Drinks
      {formik.touched.drinks && formik.errors.drinks ? (
        <div>{formik.errors.drinks}</div>
      ) : null}
      <input type="submit" value="Submit" />
    </form>);
}