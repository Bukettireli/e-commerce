import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import SignupPage from './pages/SignupPage';


function App() {
  return (
    <BrowserRouter> 
        <Switch>
            <Route exact path="/" component={HomePage} /> 
            <Route path="/product/:id" component={ProductDetailPage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/about" component={AboutPage} />
             <Route exact path="/contact" component={ContactPage} />
             <Route exact path="/team" component={TeamPage} />
             <Route exact path="/signup" component={SignupPage} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;