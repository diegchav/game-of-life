import React from 'react';
import PropTypes from 'prop-types';

import StyledGameControls from './styles/StyledGameControls';

const GameControls = ({ gridSize, changeGridSize }) => (
  <StyledGameControls>
    <input type="range" min="10" max="50" step="10" value={gridSize} onChange={changeGridSize} />
  </StyledGameControls>
);

GameControls.propTypes = {
  gridSize: PropTypes.number.isRequired,
  changeGridSize: PropTypes.func.isRequired
};

export default GameControls;