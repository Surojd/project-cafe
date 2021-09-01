import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import firestore from './firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

export default function CafeList() {
  const [list, setList] = useState([]);
  const [value, loading, error] = useCollection(
    collection(firestore, "cafes"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(firestore, "cafes"));
      const list = [];
      querySnapshot.forEach(item => {
        list.push(item.data())
      })
      setList(list);
    }
    getData()
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
      <div>
        <p>
          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {loading && <span>Collection: Loading...</span>}
          {value && (
            <span>
              Collection:{' '}
              {value.docs.map((doc) => (
                <React.Fragment key={doc.id}>
                  {JSON.stringify(doc.data())},{' '}
                </React.Fragment>
              ))}
            </span>
          )}
        </p>
      </div>
    </>);
}