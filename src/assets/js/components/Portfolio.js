import React from 'react';

import Project from './Project';
import projectsDB from './projectsDB';

const Portfolio = () => {
  const projectCard = projectsDB.map(project => (
    <Project
      key={project.id}
      webP={project.webpImg}
      img={project.img}
      title={project.title}
      desc={project.desc}
      viewCase={project.viewCase}
      linkSite={project.linkSite}
    />
  ));

  return (
    <section id='portfolio'>
      <div className='container'>{projectCard}</div>
    </section>
  );
};

export default Portfolio;
