import styled from 'styled-components';

const StyledSlider = styled.input`
  -webkit-appearance: none;
  background: transparent;

  &:focus {
    outline: none;
  }

  /* Track  */
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000;
    background: ${props => props.trackBackground};
    border-radius: 1px;
  }

  &::-moz-range-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000;
    background: ${props => props.trackBackground};
    border-radius: 1px;
  }

  &::-ms-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-ms-fill-lower {
    background: ${props => props.trackBackground};
    border: 0px solid #000;
    border-radius: 1px;
    box-shadow: 0px 0px 0px #000;
  }

  &::-ms-fill-upper {
    background: ${props => props.trackBackground};
    border: 0px solid #000;
    border-radius: 1px;
    box-shadow: 0px 0px 0px #000;
  }

  /* Thumb  */
  &::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000;
    height: 15px;
    width: 15px;
    border-radius: 20px;
    background: ${props => props.thumbBackground};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6px;
  }

  &::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000;
    height: 15px;
    width: 15px;
    border-radius: 20px;
    background: ${props => props.thumbBackground};
    cursor: pointer;
    margin-top: -6px;
  }

  &::-ms-thumb {
    box-shadow: 0px 0px 0px #000;
    height: 15px;
    width: 15px;
    border-radius: 20px;
    background: ${props => props.thumbBackground};
    cursor: pointer;
    margin-top: -6px;
  }
`;

StyledSlider.defaultProps = {
  trackBackground: '#9ea7aa',
  thumbBackground: '#cfd8dc'
};

export default StyledSlider;