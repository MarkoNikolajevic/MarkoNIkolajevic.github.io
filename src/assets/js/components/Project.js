import React from 'react';
import styled from 'styled-components';

const Project = styled.div`
  background: ${({ theme }) => theme.primary};
  border-radius: 5px;
  box-shadow: 0 5px 10px 0 rgba(33, 33, 33, 0.7);
  margin-bottom: 2rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

Project.Picture = styled.picture`
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  img {
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

Project.Info = styled.div`
  padding: 1.25rem;
`;

Project.Title = styled.h4`
  font-size: 1.125rem;
  letter-spacing: 1.1px;
  line-height: 1.25rem;
  margin-bottom: 1rem;
`;

Project.Description = styled.p`
  letter-spacing: 1px;
  opacity: 0.7;
  line-height: 1.25rem;
  margin-bottom: 1rem;
`;

Project.ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default (props) => {
  return (
    <Project>
      <Project.Picture>
        <source srcSet={props.webpImg} type='image/webp' />
        <img src={props.img} alt={props.title} />
      </Project.Picture>
      <Project.Info>
        <Project.Title>{props.title}</Project.Title>
        <Project.Description>{props.desc}</Project.Description>
        <Project.ButtonsWrapper>
          <a href={props.linkSite} target='_blank' rel='noopener noreferrer'>
            Sito
          </a>
          <a href={props.linkSite} target='_blank' rel='noopener noreferrer'>
            Github
          </a>
        </Project.ButtonsWrapper>
      </Project.Info>
    </Project>
  );
};
