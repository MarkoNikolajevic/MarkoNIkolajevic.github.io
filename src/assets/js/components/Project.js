import React from 'react';

const Project = props => {
  return (
    <div className='project-card'>
      <picture className='project-img'>
        <source srcSet={props.webpImg} type='image/webp' />
        <img src={props.img} alt={props.title} />
      </picture>
      <div className='project-info'>
        <h4 className='project-title'>{props.title}</h4>
        <p className='project-desc'>{props.desc}</p>
        <div className='project-links'>
          <a className='view-case' href={props.viewCase}>
            Info
          </a>
          <a
            className='link-site'
            href={props.linkSite}
            target='_blank'
            rel='noopener noreferrer'
          >
            Sito
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
