import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/HomePage';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route path='/products' component={Products} />
        <Route exact path='/aboutus' component={AboutUs}/>
        <Route exact path='/' component={HomePage} />
      </Switch>

      <Footer />
    </div> 
  );
}

export default App;