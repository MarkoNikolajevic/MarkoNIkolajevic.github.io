import React from 'react';

import FooterLink from './FooterLink';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-links-container'>
        <FooterLink
          socialLink={{
            url: 'https://twitter.com/markez1317',
            icon: 'fab fa-twitter'
          }}
        />
        <FooterLink
          socialLink={{
            url: 'https://github.com/MarkoNikolajevic',
            icon: 'fab fa-github'
          }}
        />
        <FooterLink
          socialLink={{
            url: 'https://www.linkedin.com/in/markonikolajevic/',
            icon: 'fab fa-linkedin-in'
          }}
        />
      </div>
      <p className='copyright'>&copy; 2020 Marko Nikolajević</p>
    </footer>
  );
};

export default Footer;
