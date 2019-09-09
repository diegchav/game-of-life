import React from 'react';

import {
  THEMES,
  THEME_GREEN
} from '../constants';

export const ThemeContext = React.createContext(THEMES[THEME_GREEN]);