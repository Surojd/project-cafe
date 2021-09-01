import { Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { AddCafe, CafeList } from './cafe';

const routes = [
  { path: '/add-cafe', component: AddCafe },
  { path: '/cafes', component: CafeList },
];
function App() {
  return (
    <div className="App">
      <header className="topnav">
        <Link to="/add-cafe">Add Cafe</Link>
        <Link to="/cafes">Cafe List</Link>
      </header>
      <div class="container">
        <Switch>
          <div>
            {
              routes.map(item => {
                return <Route  {...item} />
              })
            }
          </div>
        </Switch>
      </div>
    </div>
  );
}

export default App;
