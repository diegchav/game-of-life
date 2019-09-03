import styled from 'styled-components';

const StyledGridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 0;
`;

export default StyledGridRow;