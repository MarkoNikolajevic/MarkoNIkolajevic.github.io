import React from 'react'
import logo from '../../img/logo.svg'
import logoLarge from '../../img/logo-large.svg'

function Logo() {
  return (
    <div className='brand-logo'>
      <picture>
        <source media='min-width: 768px' srcSet={logoLarge} />
        <img src={logo} alt='Marko Nikolajevic Logo' />
      </picture>
    </div>
  )
}

export default Logo
