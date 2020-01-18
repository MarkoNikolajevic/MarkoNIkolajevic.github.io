import React from 'react';

const FooterLink = props => {
  return (
    <div className='footer-links'>
      <a
        href={props.socialLink.url}
        className='social-link'
        target='_blank'
        rel='noopener noreferrer'
      >
        {/* <img src={props.socialLink.icon} alt={props.socialLink.altText}/> */}
        <i className={props.socialLink.icon}></i>
      </a>
    </div>
  );
};

export default FooterLink;
