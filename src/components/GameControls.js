import React from 'react';

import StyledGameControls from './styles/StyledGameControls';

const GameControls = () => (
  <StyledGameControls>
    <input type="range" min="50" max="100" step="10" />
  </StyledGameControls>
);

export default GameControls;