import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import firestore from './firebase';

export default function CafeList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(query(collection(firestore, "cafes")), (snapshot) => {
      console.log("EW");
      const list = [];
      snapshot.forEach((change) => {
        list.push(change.doc.data());
      });
      setList(list)
    });
    console.log("EW");
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