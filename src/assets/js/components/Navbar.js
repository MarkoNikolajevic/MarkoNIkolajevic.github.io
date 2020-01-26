import React, { useState } from 'react';

import HamburgerMenu from './HamburgerMenu';
import MobileNav from './MobileNav';
import Logo from './Logo';

const Navbar = () => {
  // hamburger menu state
  const [open, setOpen] = useState(false);
  return (
    <nav className='navbar nav-flex container'>
      <Logo />
      <HamburgerMenu open={open} setOpen={setOpen} />
      <MobileNav open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
