import React from 'react'

function FooterLinks(props) {
  return (
    <div className='footer-links'>
      <a
        className='footer-link'
        href={props.footerLink.url}
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className={props.footerLink.icon}></i>
      </a>
    </div>
  )
}

export default FooterLinks
