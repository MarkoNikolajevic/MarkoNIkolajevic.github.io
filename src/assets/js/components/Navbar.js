import React, { useState } from 'react';

import HamburgerMenu from './HamburgerMenu';
import MobileNav from './MobileNav';
import NavLink from './NavLink';
import Logo from './Logo';

const Navbar = () => {
  // hamburger menu state
  const [open, setOpen] = useState(false);
  return (
    <nav className='navbar'>
      <div className='container nav-flex'>
        <Logo />
        <HamburgerMenu open={open} setOpen={setOpen} />
        <MobileNav open={open} setOpen={setOpen} />
        <nav className='nav-lg d-none-sm d-flex-lg' role='navigation'>
          <NavLink link={{ url: '#about', text: 'Su di me' }} />
          <NavLink link={{ url: '#portfolio', text: 'Portfolio' }} />
          <NavLink link={{ url: '#contact', text: 'Contatti' }} />
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
