import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Main.css'

import Home from './home/Home';
import Products from './products/Products';
import Product from './product/Product';

const Main = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/produktai' component={Products} />
        <Route path='/produktai/:id' component={Product} />
        {/* <Route path='/kontaktai' component={Contact} /> */}
        {/* <Route path='/krepselis' component={About} /> */}
      </Switch>
      {/* <Home /> */}
      {/* <Products /> */}
    </>
  );
};

export default Main;
