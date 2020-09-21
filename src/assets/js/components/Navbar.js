import React, { useState } from 'react';
import styled from 'styled-components';

import Container from './Container';
import HamburgerMenu from './HamburgerMenu';
import Logo from './Logo';

const Navbar = styled.nav`
  background: ${({ theme }) => theme.secondary};
  padding: 1.5rem 0;
`;

Navbar.Navflex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default () => {
  // hamburger menu state
  const [open, setOpen] = useState(false);
  return (
    <Navbar>
      <Container className='nav-flex'>
        <Navbar.Navflex>
          <Logo />
          <HamburgerMenu open={open} setOpen={setOpen} />
        </Navbar.Navflex>
      </Container>
    </Navbar>
  );
};
