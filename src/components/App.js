import React,{useState} from'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import RegistrationPage from "../pages/RegistrationPage";
import AboutPage from "../pages/AboutPage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductDescriptonPage from "../pages/ProductDescriptonPage";
import ProductCatPage from '../pages/ProductByCatPage';
import ProductContext from '../context/ProductContext';
import my404Component from './my404Component';


import "../assets/css/App.css";
import "../assets/css/utilities.css";


const App = () => {

  const [products , setProducts] = useState([{}]);


  return (

            
          <Router>
            <ProductContext.Provider value ={{products,setProducts}}>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
            
                    </Route>

                    <Route exact path= "/about">

                        <AboutPage/>
                        
                    </Route>

                    <Route  exact path= "/registration">
                        <RegistrationPage/>  
                    </Route>

                    <Route exact path= "/products">
                        <ProductListingPage/>
                    </Route>

                    <Route exact path= "/product/:id" >
                        <ProductDescriptonPage/>   
                    </Route>

                    <Route exact path= "/productsByCategory/:category">
                        <ProductCatPage/>
                    </Route>
                    <Route path='*' exact={true} component={my404Component} />

                    <Route component={my404Component} />

                </Switch> 

            </ProductContext.Provider>
          </Router>
            

  )
}

export default App


