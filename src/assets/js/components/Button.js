import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  const [link] = useState(props.link);
  return (
    <button className='btn'>
      <Link className='btn-link' to={`/${link}`}>
        {props.children}
      </Link>
    </button>
  );
};

export default Button;
