import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion, useCycle } from 'framer-motion';

import Container from './Container';
import { HamburgerMenu } from './HamburgerMenu';
import { MobileNav } from './MobileNav';
import Logo from './Logo';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      ref={containerRef}
    >
      <motion.div className='background' variants={sidebar} />
      <MobileNav />
      <HamburgerMenu toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
