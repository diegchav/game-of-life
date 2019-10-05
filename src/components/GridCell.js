import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../providers/Theme';

import StyledGridCell from './styles/StyledGridCell';

const GridCell = ({ value }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledGridCell
      className={value ? 'alive' : 'dead'}
      aliveBackground={theme.secundaryColorLight} />
  );
};

GridCell.propTypes = {
  value: PropTypes.number.isRequired
};

export default GridCell;