import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/HomePage';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route path='/products' component={Products} />
        <Route exact path='/aboutus' component={AboutUs}/>
        <Route path='/contactus' render={(props) => <ContactUs firstName='Zahra' lastName='Shokri' {...props} />} />
        <Route path='/signup' component={SignUp} />
        <Route exact path='/' component={HomePage} />
      </Switch>

      <Footer />
    </div> 
  );
}

export default App;