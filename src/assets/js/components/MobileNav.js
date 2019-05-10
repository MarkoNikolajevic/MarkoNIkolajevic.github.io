import React from 'react'
import NavLink from './NavLink'
import FooterLinks from './FooterLinks'
import logo from '../../img/monogramma.svg'

function MobileNav() {
  return (
    <nav className='nav-mobile' role='navigation'>
    <NavLink
      link={{url: '#about', text: 'Su di me'}}
    />
    <NavLink
      link={{url: '#portfolio', text: 'Portfolio'}}
    />
    <NavLink
      link={{url: '#contact', text: 'Contatti'}}
    />
    <img src={logo} width='100px' alt='Marko Nikolajević Logo'/>
      <div className='wrapper'>
        <FooterLinks
          footerLink={{url: 'https://twitter.com/markez1317', icon: 'fab fa-twitter'}}
        />
        <FooterLinks
          footerLink={{url: 'https://github.com/MarkoNikolajevic', icon: 'fab fa-github'}}
        />
        <FooterLinks
          footerLink={{url: 'https://www.linkedin.com/in/markonikolajevic/', icon: 'fab fa-linkedin-in'}}
        />
      </div>
    </nav>
  )
}

export default MobileNav
