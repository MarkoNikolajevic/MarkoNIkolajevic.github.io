import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import ToolsList from './ToolsList';
import Button from './Button';
import ContactSection from './ContactSection';

import aboutImg from '../../img/foto.jpg';

const About = styled.section`
  padding: 2.5rem 0;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

About.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

About.PersonalImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
`;

export default () => {
  return (
    <>
      <About>
        <Container>
          <About.Content>
            <About.PersonalImg src={aboutImg} alt='Marko Nikolajević' />
            <p>
              Mi sono avvicinato alla programmazione con la specializzazione in
              'Data Science' della Johns Hopkins University. Ho, inoltre,
              seguito corsi di programmazione su Udacity e altre piattaforme
              come freeCodeCamp e Coursera, migliorando ulteriormente le mie
              conoscenze.
            </p>
            <ToolsList></ToolsList>
            <Button link='portfolio' label='Portfolio' />
          </About.Content>
        </Container>
      </About>
      <ContactSection />
    </>
  );
};
