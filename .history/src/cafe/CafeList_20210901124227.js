import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import firestore from './firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

export default function CafeList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, "cafes"), (snapshot) => {
      const list = [];
      snapshot.forEach((change) => {
        list.push(change.doc.data());
      });
      setList(list)
    });
    return unsubscribe();
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Pincode</th>
            <th>Drinks</th>
          </tr>
        </thead>
        {
          list.map(({ name, city, pincode, drinks }, index) => {
            return (
              <tr key={`data-${index}`}>
                <td>{name}</td>
                <td>{city}</td>
                <td>{pincode}</td>
                <td>{drinks}</td>
              </tr>
            )
          })
        }
      </table>
    </>);
}