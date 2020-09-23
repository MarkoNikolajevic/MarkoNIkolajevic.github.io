import React from 'react';

const NavLink = props => {
  return (
    <a className='nav-link nav-mobile-link' href={props.link.url}>
      {props.link.text}
    </a>
  );
};

export default NavLink;
