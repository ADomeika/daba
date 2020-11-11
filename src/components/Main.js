import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../screens/home/Home';
import Products from '../screens/products/Products';
import Product from '../screens/product/Product';
import About from '../screens/about/About';
import Cart from '../screens/cart/Cart';

const Main = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/produktai' component={Products} />
        <Route path='/produktai/:id' component={Product} />
        <Route path='/apie' component={About} />
        <Route path='/krepselis' component={Cart} />
        {/* <Route path='/kontaktai' component={Contact} /> */}
      </Switch>
    </>
  );
};

export default Main;
