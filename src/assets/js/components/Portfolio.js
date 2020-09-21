import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import Project from './Project';
import projectsDB from './projectsDB';
import ContactSection from './ContactSection';

const Portfolio = styled.section`
  padding: 2.5rem 0;
  background: #f5f5f7;
  color: ${({ theme }) => theme.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

Portfolio.Content = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
`;

export default () => {
  const projectCard = projectsDB.map((project) => (
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
    <>
      <Portfolio>
        <Container>
          <Portfolio.Content>
            <div>{projectCard}</div>
          </Portfolio.Content>
        </Container>
      </Portfolio>
      <ContactSection />
    </>
  );
};
