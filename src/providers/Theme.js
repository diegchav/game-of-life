import React, { createContext, useState } from 'react';

import { getRandomTheme } from '../helpers/theme.helpers';

import {
  THEMES
} from '../constants';

export const ThemeContext = createContext({
  theme: null,
  changeTheme: () => {}
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getRandomTheme());
  const changeTheme = theme => setTheme(THEMES[theme]);

  return (
    <ThemeContext.Provider value={{
      theme,
      changeTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;