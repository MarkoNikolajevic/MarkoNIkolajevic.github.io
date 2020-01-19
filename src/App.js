import React from 'react';

import './assets/style/App.sass';

import Header from './assets/js/components/Header';
import About from './assets/js/components/About';
import Portfolio from './assets/js/components/Portfolio';
import Form from './assets/js/components/Form';
import Footer from './assets/js/components/Footer';

import restyling from './assets/img/restyling.png';

function App() {
  return (
    <div className='App'>
      {/* <h1>Restyling in corso...</h1>
      <div className='restyling'>
        <img src={restyling} alt='developer' />
      </div> */}
      <Header />
      <About />
      <Portfolio />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
