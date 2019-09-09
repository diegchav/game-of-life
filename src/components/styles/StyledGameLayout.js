import styled from 'styled-components';
import PropTypes from 'prop-types';

import { hexColor2Rgb } from '../../helpers/theme.helpers';

const StyledGameLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70vw;
  -webkit-box-shadow: 0 0 5px 5px rgba(${props => hexColor2Rgb(props.boxShadowColor)}, 0.5);
  -moz-box-shadow: 0 0 5px 5px rgba(${props => hexColor2Rgb(props.boxShadowColor)}, 0.5);
  box-shadow: 0 0 5px 5px rgba(${props => hexColor2Rgb(props.boxShadowColor)}, 0.5);
`;

StyledGameLayout.propTypes = {
  boxShadowColor: PropTypes.string.isRequired
};

export default StyledGameLayout;