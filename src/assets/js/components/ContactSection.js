import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import Button from './Button';

const ContactSection = styled.section`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  text-align: center;
  padding: 2rem 0;
`;

ContactSection.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
`;

export default () => {
  return (
    <ContactSection>
      <Container>
        <ContactSection.Content>
          <h3>Vuoi qualche informazione in più? Contattami!</h3>
          <Button link='contatti' label='Contattami' />
        </ContactSection.Content>
      </Container>
    </ContactSection>
  );
};
