import React, { useState } from 'react';
import './Header.css';

import Bag from './svgs/Bag';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='mobile-nav'>
        <nav>
          <div
            className={`icon hamburger${isOpen ? ' open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
      <div className='logo'>
        <a href='/' className='logo-link'>
          <img src='/logo192.png' alt='DABA logo' className='logo-image' />
        </a>
      </div>
      <a href='/krepselis' className='cart'>
        <Bag />
        <div className='cart-quantity'>
          <span>1</span>
        </div>
      </a>
    </>
  );
};

export default Header;
