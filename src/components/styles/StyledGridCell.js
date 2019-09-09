import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledGridCell = styled.div`
  &.alive {
    background: ${props => props.aliveBackground};
  }

  &.dead {
    background: ${props => props.deadBackground};
  }
`;

StyledGridCell.defaultProps = {
  deadBackground: '#fff'
};

StyledGridCell.propTypes = {
  aliveBackground: PropTypes.string.isRequired
};

export default StyledGridCell;