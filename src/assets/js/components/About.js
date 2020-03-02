import React from 'react';

import aboutImg from '../../img/about-img.svg';
import { ReactComponent as Html } from '../../img/icons/html5.svg';
import { ReactComponent as Sass } from '../../img/icons/sass.svg';
import { ReactComponent as JavaScript } from '../../img/icons/javascript.svg';
import { ReactComponent as ReactLogo } from '../../img/icons/react.svg';
import { ReactComponent as Angular } from '../../img/icons/angular.svg';
import { ReactComponent as Gulp } from '../../img/icons/gulp.svg';
import { ReactComponent as Git } from '../../img/icons/git.svg';
import { ReactComponent as Figma } from '../../img/icons/figma.svg';
import { ReactComponent as AdobeXd } from '../../img/icons/adobexd.svg';
import { ReactComponent as InVision } from '../../img/icons/invision.svg';

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
            <div className='tool'>
              <Html className='tool-logo' />
              <h5 className='tool-name'>HTML</h5>
            </div>
            <div className='tool'>
              <Sass className='tool-logo' />
              <h5 className='tool-name'>Sass</h5>
            </div>
            <div className='tool'>
              <JavaScript className='tool-logo' />
              <h5 className='tool-name'>JavaScript</h5>
            </div>
            <div className='tool'>
              <Gulp className='tool-logo' />
              <h5 className='tool-name'>gulp</h5>
            </div>
            <div className='tool'>
              <ReactLogo className='tool-logo' />
              <h5 className='tool-name'>React</h5>
            </div>
            <div className='tool'>
              <Angular className='tool-logo' />
              <h5 className='tool-name'>Angular</h5>
            </div>
            <div className='tool'>
              <Git className='tool-logo' />
              <h5 className='tool-name'>Git</h5>
            </div>
          </div>
        </div>
        <div className='design'>
          <h3>Design</h3>
          <div className='grid'>
            <div className='tool'>
              <Figma className='tool-logo' />
              <h5 className='tool-name'>Figma</h5>
            </div>
            <div className='tool'>
              <AdobeXd className='tool-logo' />
              <h5 className='tool-name'>Adobe XD</h5>
            </div>
            <div className='tool'>
              <InVision className='tool-logo' />
              <h5 className='tool-name'>InVision</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
