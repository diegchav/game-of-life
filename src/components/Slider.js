import React from 'react';
import PropTypes from 'prop-types';

const Slider = ({ min, max, step, gridSize, onChange }) => (
  <input type="range" min={min} max={max} step={step} value={gridSize} onChange={onChange} />
);

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  gridSize: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Slider;