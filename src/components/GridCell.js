import React from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../contexts/Theme';

import StyledGridCell from './styles/StyledGridCell';

const GridCell = ({ value }) => (
  <ThemeContext.Consumer>
    {theme => (
      <StyledGridCell
        className={value ? 'alive' : 'dead'}
        aliveBackground={theme.secundaryColorLight} />
    )}
  </ThemeContext.Consumer>
);

GridCell.propTypes = {
  value: PropTypes.number.isRequired
};

export default GridCell;