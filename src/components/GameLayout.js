import React from 'react';

import GameTitle from './GameTitle';
import GameBoard from './GameBoard';
import GameControls from './GameControls';

class GameLayout extends React.Component {
  render() {
    return (
      <div>
        <GameTitle />
        <GameBoard />
        <GameControls />
      </div>
    );
  }
}

export default GameLayout;