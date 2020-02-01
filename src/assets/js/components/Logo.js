import React from 'react';

import logo from '../../img/logo.svg';
import logoBlack from '../../img/logo-black.svg';

const Logo = () => {
  return (
    <div className='brand-logo'>
      <picture>
        <source srcSet={logoBlack} media='(min-width: 1024px)'></source>
        <img src={logo} alt='Marko Nikolajevic logo' />
      </picture>
    </div>
  );
};

export default Logo;
