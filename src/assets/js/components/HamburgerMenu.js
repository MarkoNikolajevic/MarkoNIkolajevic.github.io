import React from 'react';

const HamburgerMenu = ({ open, setOpen }) => {
  const navMobile = document.querySelector('.nav-mobile');
  const hamburger = document.querySelector('.hamburger-menu');
  const body = document.querySelector('body');

  if (open) {
    navMobile.classList.toggle('show-mobile-nav');
    hamburger.classList.toggle('animated');
    body.classList.toggle('no-scroll');
    setOpen(false);
    closeNav();
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

const closeNav = () => {
  let links = document.querySelectorAll('.nav-mobile-link');
  links = Array.from(links);
  links.forEach(elem => {
    elem.addEventListener('click', () => {
      const hamburger = document.querySelector('.hamburger-menu');
      const nav = document.querySelector('.nav-mobile');
      const body = document.querySelector('body');
      nav.classList.remove('show-mobile-nav');
      hamburger.classList.remove('animated');
      body.classList.toggle('no-scroll');
    });
  });
};

export default HamburgerMenu;
