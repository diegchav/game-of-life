import React from 'react';
import PropTypes from 'prop-types';

import Slider from './Slider';
import ColorPicker from './ColorPicker';
import { ThemeContext } from '../contexts/Theme';

import { getThemeColors } from '../helpers/theme.helpers';

import StyledGameControls from './styles/StyledGameControls';

import {
  MIN_GRID_SIZE,
  MAX_GRID_SIZE,
  GRID_SIZE_STEP,
  MIN_UPDATE_INTERVAL,
  MAX_UPDATE_INTERVAL,
  UPDATE_INTERVAL_STEP
} from '../constants';

const themeColors = getThemeColors();

const GameControls = ({ gridSize, speed, onChangeGridSize, onChangeSpeed, onThemeChange }) => (
  <ThemeContext.Consumer>
    {theme => (
      <StyledGameControls>
        <Slider
          label="Grid Size"
          min={MIN_GRID_SIZE}
          max={MAX_GRID_SIZE}
          step={GRID_SIZE_STEP}
          value={gridSize}
          trackBackground={theme.secundaryColorLight}
          thumbBackground={theme.primaryColor}
          onChange={onChangeGridSize} />
        <Slider
          label="Speed"
          min={MIN_UPDATE_INTERVAL}
          max={MAX_UPDATE_INTERVAL}
          step={UPDATE_INTERVAL_STEP}
          value={speed}
          trackBackground={theme.secundaryColorLight}
          thumbBackground={theme.primaryColor}
          onChange={onChangeSpeed} />
        <ColorPicker
          label="Theme"
          currentColor={theme.primaryColor}
          colors={themeColors}
          onPickColor={onThemeChange} />
      </StyledGameControls>
    )}
  </ThemeContext.Consumer>
);

GameControls.propTypes = {
  gridSize: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  onChangeGridSize: PropTypes.func.isRequired,
  onChangeSpeed: PropTypes.func.isRequired,
  onThemeChange: PropTypes.func.isRequired
};

export default GameControls;