import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="App-link" to="/">Add Cafe</Link>
        <Link className="App-link" to="/cafes">Cafe List</Link>
      </header>
      <container>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </container>
    </div>
  );
}

export default App;
