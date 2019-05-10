import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <header className='main-header'>
      <Navbar />
      <div className='header-text'>
        <h1 className='main-title'>Marko<br />Nikolajević</h1>
        <p className='intro'>
          Sono un web developer e web designer situato a Trieste.
        </p>
      </div>
    </header>
  )
}

export default Header
