import React from 'react';

import { ThemeContext } from '../contexts/Theme';

import StyledGameTitle from './styles/StyledGameTitle';

const GameTitle = () => (
  <ThemeContext.Consumer>
    {theme => (
      <StyledGameTitle backgroundColor={theme.primaryColor}>
        <p>Game of Life</p>
      </StyledGameTitle>
    )}
  </ThemeContext.Consumer>
);

export default GameTitle;