import React from 'react';
import PropTypes from 'prop-types';

import StyledSlider from './styles/StyledSlider';

const Slider = ({ label, min, max, step, gridSize, trackBackground, thumbBackground, onChange }) => (
  <StyledSlider trackBackground={trackBackground} thumbBackground={thumbBackground}>
    <span>
      {label}
    </span>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={gridSize}
      onChange={onChange} />
  </StyledSlider>
);

Slider.propTypes = {
  label: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  gridSize: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  trackBackground: PropTypes.string,
  thumbBackground: PropTypes.string
};

export default Slider;