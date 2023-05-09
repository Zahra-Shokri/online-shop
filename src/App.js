import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/shared/Header';
import HomePage from './components/HomePage';
import NewProducts from './components/NewProducts';
import ShopCartList from './components/ShopCartList';
import ProductDetails from './components/ProductDetails';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ProductsContext from './context/ProductsContext';
import CartContext from './context/CartContext';

import './App.css';

const App = () => {
  return (
    <ProductsContext>
      <CartContext>
        <Header />
          
          <Switch>
            <Route path='/products/:id' component={ProductDetails} />
            <Route path='/shopcartlist' component={ShopCartList} />
            <Route path='/products' component={NewProducts} />
            <Route exact path='/aboutus' component={AboutUs}/>
            <Route path='/contactus' render={(props) => <ContactUs firstName='Zahra' lastName='Shokri' {...props} />} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route path='/notfound' component={NotFound} />
            <Route exact path='/' component={HomePage} />
            <Redirect to='/notfound' from='/*' /> 
          </Switch>

        <Footer />
      </CartContext>
    </ProductsContext>
  );
}

export default App;