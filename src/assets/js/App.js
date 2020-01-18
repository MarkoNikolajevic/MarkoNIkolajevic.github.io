import React from 'react'
import '../style/App.sass'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Form from './components/Form'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Portfolio />
      <Form />
      <Footer />
    </div>
  )
}


export default App
