import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StyledColorPicker from './styles/StyledColorPicker';

const ColorPicker = ({ label = null, currentColor, colors, onPickColor }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handlePickColor = (color) => {
    onPickColor(color);
  };

  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleCloseOptions = () => {
    setShowOptions(false);
  };

  return (
    <StyledColorPicker backgroundColor={currentColor}>
      {label
        ? <span>{label}</span>
        : null
      }
      {showOptions
        ? <div className="color-options" onMouseLeave={handleCloseOptions}>
            {colors.map(color => (
              <div
                key={color.name}
                className="color-option"
                style={{ backgroundColor: color.color }}
                onClick={() => handlePickColor(color.name)}
              >
              </div>
            ))}
          </div>
        : <div
            className="current-color"
            style={{ backgroundColor: currentColor }}
            onClick={handleShowOptions}
          ></div>
      }
    </StyledColorPicker>
  );
};

ColorPicker.propTypes = {
  currentColor: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  })),
  onPickColor: PropTypes.func.isRequired
};

export default ColorPicker;