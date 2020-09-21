import React from 'react';
import { motion } from 'framer-motion';

import SecondaryHeader from '../components/SecondaryHeader';
import Contact from '../components/Form';

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

const ContactPage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <SecondaryHeader>
        <h2>
          Vuoi collaborare o semplicemente salutare? <br />
          Contattami
        </h2>
      </SecondaryHeader>
      <Contact />
    </motion.div>
  );
};

export default ContactPage;
