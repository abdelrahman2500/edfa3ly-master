
import './App.css';
import Products from './pages/products/Products';
import {BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import ProductInfo from './pages/product/ProductInfo';
import { ContextProvider } from './context/ContextAPI';


function App() {

  return (
    
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <ContextProvider>
            <div className="App">
              <Navbar />
              <Route component={Home} path={"/"} exact/>
              <Route component={Products} path={"/products"} exact />
              <Route component={ProductInfo} path={"/products/:id"} exact />
            </div>
        </ContextProvider>
      </Switch>
    </HashRouter>
  );
}

export default App;
