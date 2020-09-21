import React from 'react';

import Header from '../components/Header';
import About from '../components/About';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { deley: 1.5, duration: 1.5 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const Home = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <Header />
      <About />
    </motion.div>
  );
};

export default Home;
