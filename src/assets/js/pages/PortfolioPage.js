import React from 'react';
import { motion } from 'framer-motion';

import SecondaryHeader from '../components/SecondaryHeader';
import Portfolio from '../components/Portfolio';

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

const PortfolioPage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <SecondaryHeader>
        <h2>Portfolio</h2>
        <p>Alcuni dei miei lavori</p>
      </SecondaryHeader>
      <Portfolio />
    </motion.div>
  );
};

export default PortfolioPage;
