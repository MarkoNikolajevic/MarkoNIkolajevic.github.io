import React from 'react';

import logo from '../../img/logo.svg';

const Logo = () => {
  return (
    <div className='brand-logo'>
      <picture>
        <source media='(min-width: 768px)'></source>
        <img src={logo} alt='Marko Nikolajevic logo' />
      </picture>
    </div>
  );
};

export default Logo;
