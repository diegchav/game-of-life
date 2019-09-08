import React from 'react';

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

class GameLayout extends React.Component {
  state = {
    gridSize: GRID_SIZE,
    grid: generatePopulation(GRID_SIZE),
    speed: UPDATE_INTERVAL
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ grid: updatePopulation(this.state.grid) });
    }, (MAX_UPDATE_INTERVAL + MIN_UPDATE_INTERVAL - UPDATE_INTERVAL));
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleChangeGridSize = (event) => {
    const newGridSize = parseInt(event.target.value);
    const oldPopulation = [...this.state.grid];
    const newPopulation = generatePopulation(newGridSize, oldPopulation);
    this.setState({ gridSize: newGridSize, grid: newPopulation });
  };

  handleChangeSpeed = (event) => {
    const newInterval = parseInt(event.target.value);

    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.setState({
        grid: updatePopulation(this.state.grid)
      });
    }, (MAX_UPDATE_INTERVAL + MIN_UPDATE_INTERVAL - newInterval));

    this.setState({ speed: newInterval });
  };

  render() {
    const { grid, gridSize, speed } = this.state;
    return (
      <StyledGameLayout>
        <GameTitle />
        <GameGrid grid={grid} />
        <GameControls
          gridSize={gridSize}
          speed={speed}
          onChangeGridSize={this.handleChangeGridSize}
          onChangeSpeed={this.handleChangeSpeed} />
      </StyledGameLayout>
    );
  }
}

export default GameLayout;