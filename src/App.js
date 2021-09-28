// import axios from "axios";
import './App.css';
// import { useContext, useEffect, useState } from 'react';
import Products from './pages/products/Products';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { Context } from './context/ContextAPI';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';


function App() {

  return (
    <Switch>
      <div className="App">
        <Navbar />
        <Route path="/edfa3ly-master/" exact>
          <Home />
        </Route>
        <Route path="/edfa3ly-master/products" exact>
          <Products />
        </Route>
        <Route path="*">
          <Home />
        </Route>
        <Redirect from="*" to="/edfa3ly-master/" />
      </div>
    </Switch>
  );
}

export default App;
