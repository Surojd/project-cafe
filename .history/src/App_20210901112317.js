import { Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { AddCafe, CafeList } from './cafe';

const routes = [
  { path: '/add-cafe', component: AddCafe },
  { path: '/cafe-list', component: CafeList },
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="App-link" to="/add-cafe">Add Cafe</Link>
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
            <Redirect exact from="/" to="/add-cafe" />
          </div>
        </Switch>
      </container>
    </div>
  );
}

export default App;
