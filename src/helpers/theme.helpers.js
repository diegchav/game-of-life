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