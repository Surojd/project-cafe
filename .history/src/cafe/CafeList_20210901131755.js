import { collection, getDocs, query, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import firestore from './firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

export default function CafeList() {
  const [value, loading, error] = useCollection(
    collection(firestore, 'cafes'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
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
  );

  const [list, setList] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     const querySnapshot = await getDocs(collection(firestore, "cafes"));
  //     const list = [];
  //     querySnapshot.forEach(item => {
  //       list.push({ id: item.id, ...item.data() })
  //     })
  //     setList(list);
  //   }
  //   getData()
  // }, []);

  useEffect(() => {
    const q = query(collection(firestore, "cafes"));
    const unsubscribe = onSnapshot(q, { includeMetadataChanges: true }, (querySnapshot) => {
      const list = [];
      querySnapshot.docChanges().forEach((change) => {
        const item = change.doc;
        console.log(item);
        list.push({ id: item.id, ...item.data() })
      });
      setList(list)
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