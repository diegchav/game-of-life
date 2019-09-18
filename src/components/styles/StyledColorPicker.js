import styled from 'styled-components';

const StyledColorPicker = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5px;
  position: relative;

  span {
    margin-right: 5px;
    color: ${props => props.labelColor};
    font-size: ${props => props.labelSize};
  }

  div.color-options {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border: 1px solid ${props => props.optionsBorderColor};
    position: absolute;
    left: 45px;
    bottom: -20px;
    background-color: #fff;
  }

  div.color-option {
    width: 20px;
    height: 20px;
    margin: 5px;
    border-radius: 3px;
    cursor: pointer;
  }

  div.color-option:hover {
    opacity: 0.5;
  }

  div.current-color {
    width: 20px;
    height: 20px;
    border-radius: 3px;
    cursor: pointer;
  }

  div.current-color:hover {
    opacity: 0.5;
  }
`;

StyledColorPicker.defaultProps = {
  labelColor: '#9ea7aa',
  labelSize: '0.75rem',
  optionsBorderColor: '#9ea7aa'
};

export default StyledColorPicker;