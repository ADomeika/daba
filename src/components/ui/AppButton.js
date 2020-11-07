import React from 'react';
import './AppButton.css';

const AppButton = ({ children, onClick }) => {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  )
}

export default AppButton
