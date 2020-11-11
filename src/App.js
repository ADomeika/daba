import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className='background'>
      <header className='header'>
        <Header />
      </header>

      <Main />
      
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
