import styled from 'styled-components';

const StyledGameGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(${props => props.height}, 1fr);
  grid-gap: 0;
  width: 100%;
  height: 80vh;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export default StyledGameGrid;