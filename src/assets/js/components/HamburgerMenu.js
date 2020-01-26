import React from 'react';

const HamburgerMenu = ({ open, setOpen }) => {
  const navMobile = document.querySelector('.nav-mobile');
  const hamburger = document.querySelector('.hamburger-menu');

  if (open) {
    navMobile.classList.toggle('show-mobile-nav');
    hamburger.classList.toggle('animated');
    setOpen(false);
  }

  return (
    <div
      className='hamburger-menu'
      open={open}
      onClick={() => setOpen(!open)}
      aria-label='Menu'
      aria-controls='navigation'
    >
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
    </div>
  );
};

export default HamburgerMenu;
