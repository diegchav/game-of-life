import React from 'react';

import GameTitle from './GameTitle';
import GameGrid from './GameGrid';
import GameControls from './GameControls';

import StyledGameLayout from './styles/StyledGameLayout';

import { generatePopulation, updatePopulation } from '../helpers/game.helpers';

import {
  GRID_SIZE,
  UPDATE_INTERVAL
} from '../constants';

class GameLayout extends React.Component {
  state = {
    gridSize: GRID_SIZE,
    grid: generatePopulation(GRID_SIZE)
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ grid: updatePopulation(this.state.grid) });
    }, UPDATE_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeGridSize = (event) => {
    const newGridSize = parseInt(event.target.value);
    const oldPopulation = [...this.state.grid];
    const newPopulation = generatePopulation(newGridSize, oldPopulation);
    this.setState({ gridSize: newGridSize, grid: newPopulation });
  };

  render() {
    const { grid, gridSize } = this.state;
    return (
      <StyledGameLayout>
        <GameTitle />
        <GameGrid grid={grid} />
        <GameControls gridSize={gridSize} changeGridSize={this.changeGridSize} />
      </StyledGameLayout>
    );
  }
}

export default GameLayout;