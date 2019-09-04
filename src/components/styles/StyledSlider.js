import styled from 'styled-components';

const StyledSlider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5px;

  span {
    margin-right: 5px;
    color: ${props => props.labelColor};
    font-size: ${props => props.labelSize};
  }

  input[type=range] {
    -webkit-appearance: none;
    background: transparent;
    margin: 0;
    padding: 0;
  }

  input[type=range]:focus {
    outline: none;
  }

  /* Track  */
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    margin: 8px 0;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000;
    background: ${props => props.trackBackground};
  }

  input[type=range]::-moz-range-track {
    width: 100%;
    height: 4px;
    margin: 8px 0;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000;
    background: ${props => props.trackBackground};
  }

  input[type=range]::-ms-track {
    width: 100%;
    height: 4px;
    margin: 8px 0;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type=range]::-ms-fill-lower {
    background: ${props => props.trackBackground};
    border: 0px solid #000;
    box-shadow: 0px 0px 0px #000;
  }

  input[type=range]::-ms-fill-upper {
    background: ${props => props.trackBackground};
    border: 0px solid #000;
    box-shadow: 0px 0px 0px #000;
  }

  /* Thumb  */
  input[type=range]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000;
    height: 15px;
    width: 15px;
    border-radius: 20px;
    background: ${props => props.thumbBackground};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5px;
  }

  input[type=range]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000;
    height: 15px;
    width: 15px;
    border-radius: 20px;
    background: ${props => props.thumbBackground};
    cursor: pointer;
    margin-top: -5px;
  }

  input[type=range]::-ms-thumb {
    box-shadow: 0px 0px 0px #000;
    height: 15px;
    width: 15px;
    border-radius: 20px;
    background: ${props => props.thumbBackground};
    cursor: pointer;
    margin-top: -5px;
  }
`;

StyledSlider.defaultProps = {
  trackBackground: '#9ea7aa',
  thumbBackground: '#cfd8dc',
  labelColor: '#9ea7aa',
  labelSize: '0.75rem'
};

export default StyledSlider;