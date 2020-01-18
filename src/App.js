import React from 'react';

import './assets/style/App.sass';

import Header from './assets/js/components/Header';
import About from './assets/js/components/About';
import Portfolio from './assets/js/components/Portfolio';
import Form from './assets/js/components/Form';
import Footer from './assets/js/components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Portfolio />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
