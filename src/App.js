import React from 'react';
import styled from 'styled-components';

import GameLayout from './components/GameLayout';

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.backgroundColor};
`;

StyledApp.defaultProps = {
  theme: {
    backgroundColor: '#005662'
  }
};

const  App = () => (
  <StyledApp>
    <GameLayout />
  </StyledApp>
);

export default App;
