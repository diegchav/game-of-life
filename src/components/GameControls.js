import React from 'react';

import StyledGameControls from './styles/StyledGameControls';

const GameControls = () => (
  <StyledGameControls>
    <input type="range" min="10" max="50" step="10" />
  </StyledGameControls>
);

export default GameControls;