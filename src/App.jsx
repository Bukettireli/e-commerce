// src/App.jsx

import React from 'react';
// v5 için Switch ve Route kullanılıyor
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

import Layout from './components/layout/Layout'; 
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter> 
        
        <Layout>
           
            <Switch>
               
                <Route exact path="/" component={Home} /> 
                
              
            </Switch>
        </Layout>
    </BrowserRouter>
  );
}

export default App;