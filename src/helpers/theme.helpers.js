import {
  THEME_GREEN,
  THEME_PURPLE,
  THEME_BLUE,
  THEME_GREY,
  THEME_RED,
  THEME_ORANGE
} from '../constants';

export const getRandomTheme = () => {
  const themes = [
    THEME_GREEN,
    THEME_PURPLE,
    THEME_BLUE,
    THEME_GREY,
    THEME_RED,
    THEME_ORANGE
  ];

  return themes[Math.floor(Math.random() * themes.length)];
};

/*
* Convert a color represented in hexadecimal into its rgb equivalent.
*
* Ex: 'eb4034' -> '235, 64, 52'
*/
export const hexColor2Rgb = (hexColor) => {
  // Remove hash symbol.
  hexColor = hexColor.replace(/#/g, '');

  // Accept only 6-digit hex colors.
  if (hexColor.length !== 6) {
    throw new Error('Invalid hex color: ', hexColor);
  }

  const r = parseInt(hexColor, 16) >> 16;
  const g = (parseInt(hexColor, 16) >> 8) & 255;
  const b = parseInt(hexColor, 16) & 255;

  return `${r}, ${g}, ${b}`;
};