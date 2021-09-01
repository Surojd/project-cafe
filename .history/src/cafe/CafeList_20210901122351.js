import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import firestore from './firebase';

export default function CafeList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(firestore, "cafes"));
      setList(querySnapshot);
    }
  }, []);
  return (<table>
    <tr>
      <th>Name</th>
      <th>City</th>
      <th>Pincode</th>
      <th>Drinks</th>
    </tr>
    {
      list.map(item => {
        return (
          <tr>
            <td>Name</td>
            <td>City</td>
            <td>Pincode</td>
            <td>Drinks</td>
          </tr>
        )
      })
    }
  </table>);
}