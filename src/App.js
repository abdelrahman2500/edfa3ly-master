// import axios from "axios";
import './App.css';
// import { useContext, useEffect, useState } from 'react';
import Products from './pages/products/Products';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { Context } from './context/ContextAPI';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';


function App() {
  // const context = useContext(Context)
  // const[stars, setStars]= useState(Array(5))

  // useEffect(()=> {
  //   setStars(stars.fill("icon"))
  // }, [stars])

  return (
    <Switch>
      <div className="App">
        <Navbar />
        <Redirect exact from="/" to="/edf3ly" />
        <Route path="/edf3ly" exact>
          <Home />
        </Route>
        <Route path="/edf3ly/products" exact>
          <Products />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
