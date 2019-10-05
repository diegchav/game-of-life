import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import GameTitle from './GameTitle';
import GameGrid from './GameGrid';
import GameControls from './GameControls';

import StyledGameLayout from './styles/StyledGameLayout';

import { generatePopulation, updatePopulation } from '../helpers/game.helpers';

import {
  GRID_SIZE,
  UPDATE_INTERVAL,
  MIN_UPDATE_INTERVAL,
  MAX_UPDATE_INTERVAL
} from '../constants';

function GameLayout({ onThemeChange }) {
  const [ grid, setGrid ] = useState(generatePopulation(GRID_SIZE));
  const [ gridSize, setGridSize ] = useState(GRID_SIZE);
  const [ speed, setSpeed ] = useState(UPDATE_INTERVAL);

  // Update grid every 'speed' milliseconds.
  useEffect(() => {
    const interval = setInterval(() => {
      setGrid(updatePopulation(grid));
    }, (MAX_UPDATE_INTERVAL + MIN_UPDATE_INTERVAL - speed));

    return () => clearInterval(interval);
  });

  function handleChangeGridSize(event) {
    const newGridSize = parseInt(event.target.value);
    const oldPopulation = [...grid];
    const newPopulation = generatePopulation(newGridSize, oldPopulation);
    setGridSize(newGridSize);
    setGrid(newPopulation);
  };

  function handleChangeSpeed(event) {
    const newInterval = parseInt(event.target.value);
    setSpeed(newInterval);
  };
  
  return (
    <StyledGameLayout>
      <GameTitle />
      <GameGrid grid={grid} />
      <GameControls
        gridSize={gridSize}
        speed={speed}
        onChangeGridSize={handleChangeGridSize}
        onChangeSpeed={handleChangeSpeed}
        onThemeChange={onThemeChange} />
    </StyledGameLayout>
  );
}

GameLayout.propTypes = {
  onThemeChange: PropTypes.func.isRequired
};

export default GameLayout;