import { collection, getDocs, query, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import firestore from './firebase';

export default function CafeList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(firestore, "cafes"));
      const list = [];
      querySnapshot.forEach(item => {
        list.push({ id: item.id, ...item.data() })
      })
      setList(list);
    }
    getData()
  }, []);

  useEffect(() => {
    const q = query(collection(firestore, "cafes"));
    const unsubscribe = onSnapshot(q, { includeMetadataChanges: true }, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push(doc.data().name);
      });
      console.log("Current cities in CA: ", cities.join(", "));
    });
    return unsubscribe;
  }, []);
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