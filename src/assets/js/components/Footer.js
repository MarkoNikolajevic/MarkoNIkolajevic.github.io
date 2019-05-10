import React from 'react'
import FooterLinks from './FooterLinks'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-links-container'>
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
      <p className='copyright'>&copy; 2019 Marko Nikolajević</p>
    </footer>
  )
}

export default Footer
