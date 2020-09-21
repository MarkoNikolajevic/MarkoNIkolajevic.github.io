import React, { useState } from 'react';
import styled from 'styled-components';

const Tool = styled.div`
  img {
    width: 45px;
  }

  h5 {
    opacity: 0.5;
  }
`;

export default (props) => {
  const [toolImg] = useState(props.toolImg);
  const [altText] = useState(props.altText);
  const [toolName] = useState(props.toolName);

  return (
    <Tool>
      <img src={toolImg} alt={altText} />
      <h5>{toolName}</h5>
    </Tool>
  );
};
