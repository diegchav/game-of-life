import React from 'react';

import GameTitle from './GameTitle';
import GameGrid from './GameGrid';
import GameControls from './GameControls';

import StyledGameLayout from './styles/StyledGameLayout';

class GameLayout extends React.Component {
  render() {
    return (
      <StyledGameLayout>
        <GameTitle />
        <GameGrid />
        <GameControls />
      </StyledGameLayout>
    );
  }
}

export default GameLayout;