import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledGameTitle = styled.div`
  background: ${props => props.backgroundColor};
  width: 100%;
  text-align: center;
`;

StyledGameTitle.propTypes = {
  backgroundColor: PropTypes.string.isRequired
};

export default StyledGameTitle;