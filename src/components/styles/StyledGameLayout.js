import styled from 'styled-components';

const StyledGameLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70vw;
  -webkit-box-shadow: 0 0 8px 8px rgba(${props => props.theme.rgbBoxShadow}, 0.5);
  -moz-box-shadow: 0 0 8px 8px rgba(${props => props.theme.rgbBoxShadow}, 0.5);
  box-shadow: 0 0 8px 8px rgba(${props => props.theme.rgbBoxShadow}, 0.5);
`;

StyledGameLayout.defaultProps = {
  theme: {
    rgbBoxShadow: '0, 54, 58'
  }
};

export default StyledGameLayout;