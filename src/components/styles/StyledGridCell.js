import styled from 'styled-components';

const StyledGridCell = styled.div`
  border: 1px solid black;

  &.alive {
    background: black;
  }

  &.dead {
    background: white;
  }
`;

export default StyledGridCell;