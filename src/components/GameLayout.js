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

  render() {
    const { grid } = this.state;
    return (
      <StyledGameLayout>
        <GameTitle />
        <GameGrid grid={grid} />
        <GameControls />
      </StyledGameLayout>
    );
  }
}

export default GameLayout;