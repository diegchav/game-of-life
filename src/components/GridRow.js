import React from 'react';
import PropTypes from 'prop-types';

import GridCell from './GridCell';

import StyledGridRow from './styles/StyledGridRow';

const GridRow = ({ row }) => (
  <StyledGridRow width={row.length}>
    {row.map((cell, i) => <GridCell key={i} value={cell} />)}
  </StyledGridRow>
);

GridRow.propTypes = {
  row: PropTypes.array.isRequired
};

export default GridRow;