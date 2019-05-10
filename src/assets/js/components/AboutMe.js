import React from 'react'
import profilePicture from '../../img/profile-picture.jpeg'

function AboutMe() {
  return (
    <section id='about'>
      <img src={profilePicture} alt='Marko Nikolajević' className='profile-picture' />
      <p className='personal-desc'>
        Mi sono avvicinato alla programmazione attraverso la Specializzazione in
        'Data Science' offerta dalla Johns Hopkins University sulla piattaforma di
        e-learning, Coursera. Ho imparato a programmare in R e vari aspetti
        nell'analisi di dati. Inoltre ho seguito corsi di programmazione web, sia
        su Coursera sia su altre piattaforme come freeCodeCamp, Udacity ed edX,
        migliorando la mia conoscenza e abilità.
      </p>
    </section>
  )
}

export default AboutMe
