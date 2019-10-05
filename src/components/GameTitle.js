import React, { useContext } from 'react';

import { ThemeContext } from '../providers/Theme';

import StyledGameTitle from './styles/StyledGameTitle';

const GameTitle = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledGameTitle backgroundColor={theme.primaryColor}>
      <p>Game of Life</p>
    </StyledGameTitle>
  );
};

export default GameTitle;