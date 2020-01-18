import React from 'react'
import Project from './Project'
import projectsDB from './projectsDB'

function Portfolio() {
  const projectCard = projectsDB.map(project =>
    <Project
      key={project.id}
      webP={project.webPImage}
      image={project.image}
      title={project.title}
      description={project.description}
      link={project.link}
    />
  )
  return (
    <section id='portfolio'>
      {projectCard}
    </section>
  )
}

export default Portfolio
