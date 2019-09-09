import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from'prop-types';

import GameLayout from './components/GameLayout';
import { ThemeContext } from './contexts/Theme';

import { getRandomTheme } from './helpers/theme.helpers';

import {
  THEMES
} from './constants';

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  /* background: ${props => props.backgroundColor}; */
`;

StyledApp.propTypes = {
  backgroundColor: PropTypes.string.isRequired
};

function App() {
  const [theme, setTheme] = useState(THEMES[getRandomTheme()]);

  function handleChangeTheme(theme) {
    setTheme(THEMES[theme]);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <StyledApp backgroundColor={theme.secundaryColorDark}>
        <GameLayout onThemeChange={handleChangeTheme} />
      </StyledApp>
    </ThemeContext.Provider>
  );
};

export default App;
