import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import FooterLink from './FooterLink';
import Container from './Container';
import logo from '../../img/logo-black.svg';

const Footer = styled.footer`
  padding: 2rem 0;
  background: #f5f5f7;
  color: ${({ theme }) => theme.secondary};
`;

Footer.Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 150px;
    margin-bottom: 1.5rem;
  }

  .footer-navigation {
    text-decoration: none;
    color: ${({ theme }) => theme.secondary};
    margin: 0.5rem 0;
    font-weight: 700;
    opacity: 0.5;
    transition: color 300ms ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }

  .copyright {
    margin-top: 1.5rem;
  }
`;

Footer.SocialGrid = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
`;

export default () => {
  return (
    <Footer>
      <Container>
        <Footer.Content>
          <img src={logo} alt='Marko Nikolajevic logo' />
          <Link to='/' className='footer-navigation'>
            Home
          </Link>
          <Link to='/portfolio' className='footer-navigation'>
            Portfolio
          </Link>
          <Link to='/contatti' className='footer-navigation'>
            Contatti
          </Link>
          <Footer.SocialGrid>
            <FooterLink
              socialLink={{
                url: 'https://twitter.com/markez1317',
                icon: 'fab fa-twitter',
              }}
            />
            <FooterLink
              socialLink={{
                url: 'https://github.com/MarkoNikolajevic',
                icon: 'fab fa-github',
              }}
            />
            <FooterLink
              socialLink={{
                url: 'https://www.linkedin.com/in/markonikolajevic/',
                icon: 'fab fa-linkedin-in',
              }}
            />
          </Footer.SocialGrid>
          <p className='copyright'>&copy; 2020 Marko Nikolajević</p>
        </Footer.Content>
      </Container>
    </Footer>
  );
};
