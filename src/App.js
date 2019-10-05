import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from'prop-types';

import GameLayout from './components/GameLayout';

import { ThemeContext } from './providers/Theme';

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${props => props.backgroundColor};
`;

StyledApp.propTypes = {
  backgroundColor: PropTypes.string.isRequired
};

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledApp backgroundColor={theme.secundaryColorDark}>
      <GameLayout />
    </StyledApp>
  );
};

export default App;
