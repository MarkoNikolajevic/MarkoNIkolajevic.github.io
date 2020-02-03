import React from 'react';

import aboutImg from '../../img/about-img.svg';
import html from '../../img/icons/html5.svg';
import sass from '../../img/icons/sass.svg';
import javascript from '../../img/icons/javascript.svg';
import react from '../../img/icons/react.svg';
import angular from '../../img/icons/angular.svg';
import gulp from '../../img/icons/gulp.svg';
import git from '../../img/icons/git.svg';
import figma from '../../img/icons/figma.svg';
import adobexd from '../../img/icons/adobexd.svg';
import invision from '../../img/icons/invision.svg';

const About = () => {
  return (
    <section id='about'>
      {/* Cambiare img in picture */}
      <div className='info container'>
        <img src={aboutImg} alt='Marko Nikolajević' className='profile-pic' />
        <p className='personal-desc'>
          Mi sono avvicinato alla programmazione con la specializzazione in
          'Data Science' della Johns Hopkins University. Ho, inoltre, seguito
          corsi di programmazione su Udacity e altre piattaforme come
          freeCodeCamp e Coursera, migliorando ulteriormente le mie conoscenze.
          {/* <br />
          <br />
          Se hai tempo da perdere e vuoi leggere di più su di me,
          <br />
          <a href='#'>clicca qua</a> */}
        </p>
      </div>
      <div className='tools-list'>
        <div className='development'>
          <h3>Development</h3>
          <div className='grid'>
            {/* First row */}
            <div className='tool'>
              <img src={html} alt='html' />
              <h5 className='tool-name'>HTML</h5>
            </div>
            <div className='tool'>
              <img src={sass} alt='sass' />
              <h5 className='tool-name'>Sass</h5>
            </div>
            <div className='tool'>
              <img src={javascript} alt='javascript' />
              <h5 className='tool-name'>JavaScript</h5>
            </div>
            <div className='tool'>
              <img src={gulp} alt='gulp' />
              <h5 className='tool-name'>gulp</h5>
            </div>
            {/* Second row */}
            <div className='tool'>
              <img src={react} alt='react' />
              <h5 className='tool-name'>React</h5>
            </div>
            <div className='tool'>
              <img src={angular} alt='angular' />
              <h5 className='tool-name'>Angular</h5>
            </div>
            <div className='tool'>
              <img src={git} alt='git' />
              <h5 className='tool-name'>Git</h5>
            </div>
          </div>
        </div>
        <div className='design'>
          <h3>Design</h3>
          <div className='grid'>
            <div className='tool'>
              <img src={figma} alt='figma' />
              <h5 className='tool-name'>Figma</h5>
            </div>
            <div className='tool'>
              <img src={adobexd} alt='adobe xd' />
              <h5 className='tool-name'>Adobe XD</h5>
            </div>
            <div className='tool'>
              <img src={invision} alt='InVision' />
              <h5 className='tool-name'>InVision</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
