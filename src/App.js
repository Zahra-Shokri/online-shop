import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/HomePage';
import Products from './components/Products';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/products' component={Products} />
      </Switch>

      <Footer />
    </div> 
  );
}

export default App;