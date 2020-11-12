import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import Bag from './svgs/Bag';

const Header = ({ cartQuantity }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen])

  return (
    <div className='header__inner'>
      <nav role='navigation' className={`menu${isOpen ? ' menu--open' : ''}`}>
        <ul>
          <li className='menu__item' onClick={() => setIsOpen(false)}>
            <Link to='/' className='menu__link'>Pagrindinis</Link>
          </li>
          <li className='menu__item' onClick={() => setIsOpen(false)}>
            <Link to='/produktai' className='menu__link'>Parduotuve</Link>
          </li>
          <li className='menu__item' onClick={() => setIsOpen(false)}>
            <Link to='/apie' className='menu__link'>Apie Mus</Link>
          </li>
          <li className='menu__item' onClick={() => setIsOpen(false)}>
            <Link to='/kontaktai' className='menu__link'>Kontaktai</Link>
          </li>
        </ul>
      </nav>

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
        <Link to='/produktai' className='logo-link'>
          <img src={require('../assets/images/logo192.png')} alt='DABA logo' className='logo-image' />
        </Link>
      </div>
      <Link to='/krepselis' className='cart-icon'>
        <Bag width='30' height='30' />
        <div className='cart-quantity'>
          <span>{cartQuantity}</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
