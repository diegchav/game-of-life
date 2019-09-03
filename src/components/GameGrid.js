import React from 'react';
import PropTypes from 'prop-types';

import GridRow from './GridRow';

import StyledGameGrid from './styles/StyledGameGrid';

const GameGrid = ({ grid }) => (
  <StyledGameGrid height={grid.length}>
    {grid.map((row, i) => <GridRow key={i} row={row} />)}
  </StyledGameGrid>
);

GameGrid.propTypes = {
  grid: PropTypes.array.isRequired
};

export default GameGrid;