
import './App.css';
import Products from './pages/products/Products';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import ProductInfo from './pages/product/ProductInfo';
import { ContextProvider } from './context/ContextAPI';


function App() {

  return (
    
    <Router>
      <Switch>
        <ContextProvider>
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
        </ContextProvider>
      </Switch>
    </Router>
  );
}

export default App;
