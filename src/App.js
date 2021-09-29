
import './App.css';
import Products from './pages/products/Products';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import ProductInfo from './pages/product/ProductInfo';


function App() {

  return (
    <Switch>
      <div className="App">
        <Navbar />
        <Route path={process.env.PUBLIC_URL + "/"} exact>
          <Home />
        </Route>
        <Route path={process.env.PUBLIC_URL +"/products"} exact>
          <Products />
        </Route>
        <Route component={ProductInfo} path={process.env.PUBLIC_URL +"/products/:id"} exact />
      </div>
    </Switch>
  );
}

export default App;
