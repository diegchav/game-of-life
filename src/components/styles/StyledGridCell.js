import styled from 'styled-components';

const StyledGridCell = styled.div`
  /* border: 1px solid ${props => props.theme.borderColor}; */

  &.alive {
    background: ${props => props.theme.aliveBackground};
  }

  &.dead {
    background: ${props => props.theme.deadBackground};
  }
`;

StyledGridCell.defaultProps = {
  theme: {
    aliveBackground: '#4fb3bf',
    deadBackground: '#fff',
    borderColor: '#005662'
  }
};

export default StyledGridCell;