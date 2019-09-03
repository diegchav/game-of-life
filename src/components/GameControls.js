import React from 'react';
import PropTypes from 'prop-types';

import Slider from './Slider';

import StyledGameControls from './styles/StyledGameControls';

import {
  MIN_GRID_SIZE,
  MAX_GRID_SIZE,
  UPDATE_STEP
} from '../constants';

const GameControls = ({ gridSize, changeGridSize }) => (
  <StyledGameControls>
    <Slider
      min={MIN_GRID_SIZE}
      max={MAX_GRID_SIZE}
      step={UPDATE_STEP}
      gridSize={gridSize}
      trackBackground="#4fb3bf"
      thumbBackground="#00838f"
      onChange={changeGridSize} />
  </StyledGameControls>
);

GameControls.propTypes = {
  gridSize: PropTypes.number.isRequired,
  changeGridSize: PropTypes.func.isRequired
};

export default GameControls;