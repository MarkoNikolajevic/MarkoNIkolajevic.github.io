import React from 'react'

function Project(props) {
  return (
    <div className='project-card'>
      <picture className='project-image'>
        <source srcSet={props.webPImage} type='image/webp' />
        <img src={props.image} alt={props.title} />
      </picture>
      <div className='project-text'>
        <h4 className='project-title'>{props.title}</h4>
        <p className='project-description'>{props.description}</p>
        <a className='project-link' href={props.link} target='_blank' rel='noopener noreferrer'>
          Visita
          <i className='fas fa-arrow-right'></i>
        </a>
      </div>
    </div>
  )
}

export default Project
