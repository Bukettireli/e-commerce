import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 


import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <BrowserRouter> 
        <Switch>
            <Route exact path="/" component={HomePage} /> 
            <Route exact path="/shop" component={ShopPage} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;