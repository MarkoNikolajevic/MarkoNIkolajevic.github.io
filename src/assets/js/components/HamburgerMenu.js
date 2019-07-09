import React from 'react'

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isActive: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isActive: !state.isActive
    }));
    const hamburger = document.querySelector('.hamburger-menu');
    const navMobile = document.querySelector('.nav-mobile');
    const body = document.querySelector('body');

    hamburger.classList.toggle('animated');
    navMobile.classList.toggle('show-menu-mobile');
    body.classList.toggle('no-scroll');
    body.ontouchend = (e) => {
      e.preventDefault();
    }
    closeNav();
  }

  render() {
    return (
      <div className='hamburger-menu' onClick={this.handleClick} aria-label='Menu' aria-controls='navigation'>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
    )
  }
}

// Close nav function
function closeNav() {
  let links = document.querySelectorAll('.nav-mobile-link');
  links = Array.from(links);
  links.forEach(function(elem) {
    elem.addEventListener('click', function() {
      const hamburger = document.querySelector('.hamburger-menu');
      const nav = document.querySelector('.nav-mobile');
      const body = document.querySelector('body');
      nav.classList.remove('show-menu-mobile');
      hamburger.classList.remove('animated');
      body.classList.toggle('no-scroll');
    });
  });
}

export default HamburgerMenu
