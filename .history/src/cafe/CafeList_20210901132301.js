import { collection, getDocs, query, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import firestore from './firebase';

export default function CafeList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const q = query(collection(firestore, "cafes"));
    const unsubscribe = onSnapshot(q, { includeMetadataChanges: true }, (querySnapshot) => {
      const items = [];
      querySnapshot.docChanges().forEach((change) => {
        const item = change.doc;
        items.push({ id: item.id, ...item.data() })
      });

      items.length && setList([...list, ...items])
    });
    return unsubscribe;
  }, [list]);
  return (<table>
    <thead>
      <tr>
        <th>Name</th>
        <th>City</th>
        <th>Pincode</th>
        <th>Drinks</th>
      </tr>
    </thead>
    {
      list.map(({ id, name, city, pincode, drinks }, index) => {
        return (
          <tr key={`data-${id}`}>
            <td>{name}</td>
            <td>{city}</td>
            <td>{pincode}</td>
            <td>{drinks}</td>
          </tr>
        )
      })
    }
  </table>);
}