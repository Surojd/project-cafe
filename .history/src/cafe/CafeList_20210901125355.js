import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import firestore from './firebase';

export default function CafeList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(firestore, "cafes"));
      const list = [];
      querySnapshot.forEach(item => {
        list.push(item)
      })
      setList(list);
    }
    getData()
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
      list.map(({ id, data }, index) => {
        const { name, city, pincode, drinks } = data;
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
  </table>);
}