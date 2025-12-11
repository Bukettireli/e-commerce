import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <BrowserRouter> 
        <Switch>
            <Route exact path="/" component={HomePage} /> 
            <Route path="/product/:id" component={ProductDetailPage} />
            <Route exact path="/shop" component={ShopPage} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;