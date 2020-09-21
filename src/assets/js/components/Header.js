import React from 'react';
import styled from 'styled-components';

import illustration from '../../img/header-illustration.png';
import Container from './Container';
import Button from './Button';

const Header = styled.header`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
`;

Header.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

Header.Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.h1Small};
  line-height: 3rem;
`;

Header.Subtitle = styled.p`
  font-size: ${({ theme }) => theme.bodyLarge};
`;

Header.Illustration = styled.div`
  width: 150px;
  margin: 1.5rem 0;

  img {
    width: 100%;
  }
`;

export default () => {
  return (
    <Header>
      <Container>
        <Header.Content>
          <Header.Title>
            Marko
            <br /> Nikolajević
          </Header.Title>
          <Header.Subtitle>Web developer | Web designer</Header.Subtitle>
          <Header.Illustration>
            <img src={illustration} alt='illustration' />
          </Header.Illustration>
          <Button link='portfolio' label='Portfolio' />
        </Header.Content>
      </Container>
    </Header>
  );
};
