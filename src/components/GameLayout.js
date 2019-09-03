import React from 'react';

import GameTitle from './GameTitle';
import GameGrid from './GameGrid';
import GameControls from './GameControls';

import StyledGameLayout from './styles/StyledGameLayout';

import { generatePopulation } from '../helpers/game.helpers';

class GameLayout extends React.Component {
  state = {
    gridSize: 10,
    grid: []
  }

  componentDidMount() {
    this.setState({
      grid: generatePopulation(this.state.gridSize)
    });
  }

  changeGridSize = (event) => {
    const newGridSize = parseInt(event.target.value);
    const newPopulation = generatePopulation(newGridSize);
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