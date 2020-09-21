import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { GlobalStyles } from './assets/style/global';
import { theme } from './assets/style/theme';
import { ThemeProvider } from 'styled-components';

import './assets/style/App.sass';

import ScrollToTop from './assets/js/components/ScrollToTop';
import Navbar from './assets/js/components/Navbar';
import Home from './assets/js/pages/Home';
import PortfolioPage from './assets/js/pages/PortfolioPage';
import ContactPage from './assets/js/pages/ContactPage';
import Footer from './assets/js/components/Footer';

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <GlobalStyles />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/portfolio'>
            <PortfolioPage />
          </Route>
          <Route path='/contatti'>
            <ContactPage />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
