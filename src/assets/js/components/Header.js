import React from 'react';

import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='header'>
      <Navbar />
      <div className='header-text-container container'>
        <div className='header-text'>
          <h1 className='main-title'>
            Marko
            <br /> Nikolajević
          </h1>
          <p className='subtitle'>Web developer | Web designer</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
