import { Link, Navigate, useRoutes } from 'react-router-dom';
import './App.css';
import { AddCafe, CafeList } from './cafe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="App-link" to="/">Add Cafe</Link>
        <Link className="App-link" to="/cafes">Cafe List</Link>
      </header>
      <container>
        { 
          useRoutes([
            { path: '/', element: <Navigate to="/add-cafe" replace /> },
            { path: 'add-cafe', element: <AddCafe /> },
            { path: 'cafe-list', element: <CafeList /> },
          ])
        }
      </container>
    </div>
  );
}

export default App;
