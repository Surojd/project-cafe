import { Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { AddCafe, CafeList } from './cafe';

const routes = [
  { path: '/', component: <Redirect to="/add-cafe" replace /> },
  { path: 'add-cafe', component: <AddCafe /> },
  { path: 'cafe-list', component: <CafeList /> },
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="App-link" to="/">Add Cafe</Link>
        <Link className="App-link" to="/cafes">Cafe List</Link>
      </header>
      <container>
        <Switch>
          <div>
            {
              routes.map(item => {
                return <Route  {...item} />
              })
            }
          </div>
        </Switch>
      </container>
    </div>
  );
}

export default App;
