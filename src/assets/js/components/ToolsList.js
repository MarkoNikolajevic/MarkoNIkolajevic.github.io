import React from 'react';
import styled from 'styled-components';

import Tool from './Tool';

import htmlLogo from '../../img/icons/html5.svg';
import sassLogo from '../../img/icons/sass.svg';
import javascriptLogo from '../../img/icons/javascript.svg';
import reactLogo from '../../img/icons/react.svg';
import angularLogo from '../../img/icons/angular.svg';
import gulpLogo from '../../img/icons/gulp.svg';
import gitLogo from '../../img/icons/git.svg';
import figmaLogo from '../../img/icons/figma.svg';
import adobeXdLogo from '../../img/icons/adobexd.svg';
import inVisionLogo from '../../img/icons/invision.svg';

const ToolsList = styled.div`
  margin: 2rem 0;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
`;

export default () => {
  return (
    <ToolsList>
      <Tool toolImg={htmlLogo} altText='Html logo' toolName='Html' />
      <Tool toolImg={sassLogo} altText='Sass logo' toolName='Sass' />
      <Tool
        toolImg={javascriptLogo}
        altText='JavaScript logo'
        toolName='JavaScript'
      />
      <Tool toolImg={reactLogo} altText='React logo' toolName='React' />
      <Tool toolImg={angularLogo} altText='Angular logo' toolName='Angular' />
      <Tool toolImg={gulpLogo} altText='Gulp logo' toolName='Gulp' />
      <Tool toolImg={gitLogo} altText='Git logo' toolName='Git' />
      <Tool toolImg={figmaLogo} altText='Figma logo' toolName='Figma' />
      <Tool toolImg={adobeXdLogo} altText='AdobeXD logo' toolName='AdobeXD' />
      <Tool
        toolImg={inVisionLogo}
        altText='inVision logo'
        toolName='inVision'
      />
    </ToolsList>
  );
};
