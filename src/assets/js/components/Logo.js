import React from 'react';
import styled from 'styled-components';

import logo from '../../img/logo.svg';

const Logo = styled.div`
  margin-right: auto;
  width: 150px;

  picture,
  img {
    width: 100%;
  }
`;

export default () => {
  return (
    <Logo>
      <picture>
        <source srcSet={logo} media='(min-width: 850px)'></source>
        <img src={logo} alt='Marko Nikolajevic logo' />
      </picture>
    </Logo>
  );
};
