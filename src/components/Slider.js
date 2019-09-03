import React from 'react';
import PropTypes from 'prop-types';

import StyledSlider from './styles/StyledSlider';

const Slider = ({ min, max, step, gridSize, trackBackground, thumbBackground, onChange }) => (
  <StyledSlider
    type="range"
    min={min}
    max={max}
    step={step}
    value={gridSize}
    trackBackground={trackBackground}
    thumbBackground={thumbBackground}
    onChange={onChange} />
);

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  gridSize: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  trackBackground: PropTypes.string,
  thumbBackground: PropTypes.string
};

export default Slider;