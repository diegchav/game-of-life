import styled from 'styled-components';

const StyledGameControls = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  background: ${props => props.theme.backgroundColor};
`;

StyledGameControls.defaultProps = {
  theme: {
    backgroundColor: '#f5f5f6'
  }
};

export default StyledGameControls;