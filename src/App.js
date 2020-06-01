import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/style/App.sass';

import ScrollToTop from './assets/js/components/ScrollToTop';
import Navbar from './assets/js/components/Navbar';
import Home from './assets/js/pages/Home';
import PortfolioPage from './assets/js/pages/PortfolioPage';
import ContactPage from './assets/js/pages/ContactPage';
import Footer from './assets/js/components/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Switch>
        <Route path='/portfolio' component={PortfolioPage} />
      </Switch>
      <Switch>
        <Route path='/contatti' component={ContactPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
