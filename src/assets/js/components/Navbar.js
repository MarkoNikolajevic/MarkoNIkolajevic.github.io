import React from 'react'
import Logo from './Logo'
import MediaQuery from 'react-responsive'
import NavLink from './NavLink'
import HamburgerMenu from './HamburgerMenu'

function Navbar() {
  return (
    <nav className='navbar nav-flex'>
      <Logo />
      <MediaQuery query='(max-width: 768px)'>
        <HamburgerMenu />
      </MediaQuery>
      <MediaQuery query='(min-width: 769px)'>
        <NavLink
          link={{url: '#about', text: 'Su di me'}}
        />
        <NavLink
          link={{url: '#portfolio', text: 'Portfolio'}}
        />
        <NavLink
          link={{url: '#contact', text: 'Contatti'}}
        />
      </MediaQuery>
    </nav>
  )
}

export default Navbar
