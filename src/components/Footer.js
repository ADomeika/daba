import React from 'react';

const Footer = () => {
  return (
    <>
      <p>DABA &copy; {new Date().getUTCFullYear()}</p>
      <p>
        <a href='tel:+37062643195'>+37062643195</a> | <a href='mailto:dalia@daba.lt'>dalia@daba.lt</a>
      </p>
    </>
  );
};

export default Footer;
