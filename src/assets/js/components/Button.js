import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 50px;
  background: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 200px;
  transition: ${({ theme }) => theme.transition};

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.secondary};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: ${({ theme }) => theme.transition};
  }
`;

export default (props) => {
  const [link] = useState(props.link);
  const [label] = useState(props.label);

  return (
    <Button>
      <Link to={`/${link}`}>{`${label}`}</Link>
    </Button>
  );
};
