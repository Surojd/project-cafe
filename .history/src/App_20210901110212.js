import logo from './logo.svg';
import './App.css';
import { Link, useRoutes, Navigate } from 'react-router-dom';

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
            { path: 'add-cafe', element: <DashboardApp /> },
            { path: 'cafe-list', element: <Staffs /> },
          ])
        }
      </container>
    </div>
  );
}

export default App;
