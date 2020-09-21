import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1240px;
`;

export default (props) => {
  return <Container>{props.children}</Container>;
};
