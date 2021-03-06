import styled from 'styled-components';

const StyledGameControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 20px;
  padding: 15px 0;
  background: ${props => props.theme.backgroundColor};
`;

StyledGameControls.defaultProps = {
  theme: {
    backgroundColor: '#f5f5f6'
  }
};

export default StyledGameControls;