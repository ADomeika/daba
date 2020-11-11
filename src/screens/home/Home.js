import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <main className='home'>
      <h1 className='slogan'>
        Kada, jeigu ne dabar?
      </h1>
      <Link to='/produktai' className='cta-button'>
        Paspausk cia
      </Link>
    </main>
  )
}

export default Home;
