import styled from 'styled-components';

const StyledGameTitle = styled.div`
  background: ${props => props.theme.backgroundColor};
  width: 100%;
  text-align: center;
`;

StyledGameTitle.defaultProps = {
  theme: {
    backgroundColor: '#00838f'
  }
};

export default StyledGameTitle;