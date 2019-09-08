import React from 'react';
import PropTypes from 'prop-types';

import Slider from './Slider';

import StyledGameControls from './styles/StyledGameControls';

import {
  MIN_GRID_SIZE,
  MAX_GRID_SIZE,
  GRID_SIZE_STEP,
  MIN_UPDATE_INTERVAL,
  MAX_UPDATE_INTERVAL,
  UPDATE_INTERVAL_STEP
} from '../constants';

const GameControls = ({ gridSize, speed, onChangeGridSize, onChangeSpeed }) => (
  <StyledGameControls>
    <Slider
      label="Grid Size"
      min={MIN_GRID_SIZE}
      max={MAX_GRID_SIZE}
      step={GRID_SIZE_STEP}
      value={gridSize}
      trackBackground="#4fb3bf"
      thumbBackground="#00838f"
      onChange={onChangeGridSize} />
    <Slider
      label="Speed"
      min={MIN_UPDATE_INTERVAL}
      max={MAX_UPDATE_INTERVAL}
      step={UPDATE_INTERVAL_STEP}
      value={speed}
      trackBackground="#4fb3bf"
      thumbBackground="#00838f"
      onChange={onChangeSpeed} />
  </StyledGameControls>
);

GameControls.propTypes = {
  gridSize: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  onChangeGridSize: PropTypes.func.isRequired,
  onChangeSpeed: PropTypes.func.isRequired
};

export default GameControls;