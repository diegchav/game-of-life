import React from 'react';
import PropTypes from 'prop-types';

import StyledGridCell from './styles/StyledGridCell';

const GridCell = ({ value }) => (
  <StyledGridCell className={value ? 'alive' : 'dead'} />
);

GridCell.propTypes = {
  value: PropTypes.number.isRequired
};

export default GridCell;