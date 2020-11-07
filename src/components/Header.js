import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import Bag from './svgs/Bag';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='header__inner'>
      <div className='mobile-nav'>
        <nav>
          <button
            className={`icon hamburger${isOpen ? ' open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
      <div className='logo'>
        <Link to='/' className='logo-link'>
          <img src={require('../assets/images/logo192.png')} alt='DABA logo' className='logo-image' />
        </Link>
      </div>
      <Link to='/krepselis' className='cart'>
        <Bag width='30' height='30' />
        <div className='cart-quantity'>
          <span>0</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
