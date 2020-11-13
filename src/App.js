import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App({ cartQuantity }) {
  return (
    <div className='background'>
      <header className='header'>
        <Header cartQuantity={cartQuantity} />
      </header>

      <Main />
      
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

const mapStateToProps = ({ cartReducer }) => ({
  cartQuantity: cartReducer.cartQuantity,
});


export default connect(mapStateToProps)(App);
