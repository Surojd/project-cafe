import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import { AddCafe, CafeList } from './cafe';

const routes = [
  { path: '/add-cafe', component: AddCafe },
  { path: '/cafes', component: CafeList },
];
function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="App">
      <header className="topnav">
        <Link to="/add-cafe" className={pathname === '/add-cafe' ? 'active' : ''}>Add Cafe</Link>
        <Link to="/cafes" className={pathname === '/cafes' ? 'active' : ''}>Cafe List</Link>
      </header>
      <div class="container">
        <Switch>
          {
            routes.map(item => {
              return <Route  {...item} />
            })
          }
        </Switch>
      </div>
    </div>
  );
}

export default App;
