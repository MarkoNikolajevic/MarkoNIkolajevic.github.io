import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import illustration from '../../img/secondary-illustration.png';

const SecondaryHeader = styled.header`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
`;

SecondaryHeader.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 2rem;
  }
`;

SecondaryHeader.Illustration = styled.div`
  width: 150px;
  margin: 1.5rem 0;

  img {
    width: 100%;
  }
`;

export default (props) => {
  return (
    <SecondaryHeader>
      <Container>
        <SecondaryHeader.Content>
          {props.children}
          <SecondaryHeader.Illustration>
            <img src={illustration} alt='illustrazione' />
          </SecondaryHeader.Illustration>
        </SecondaryHeader.Content>
      </Container>
    </SecondaryHeader>
  );
};
