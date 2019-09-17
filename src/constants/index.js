// Grid
export const MIN_GRID_SIZE = 10;
export const MAX_GRID_SIZE = 50;
export const GRID_SIZE = 30;
export const GRID_SIZE_STEP = 10;

// Update speed
export const MIN_UPDATE_INTERVAL = 100;
export const MAX_UPDATE_INTERVAL = 900;
export const UPDATE_INTERVAL = 500;
export const UPDATE_INTERVAL_STEP = 200;

// Theme
export const THEME_GREEN = 'green';
export const THEME_PURPLE = 'purple';
export const THEME_BLUE = 'blue';
export const THEME_GREY = 'grey';
export const THEME_RED = 'red';
export const THEME_ORANGE = 'orange';
export const THEMES = {
  [THEME_GREEN]: {
    name: THEME_GREEN,
    primaryColor: '#00838f',
    secundaryColorLight: '#4fb3bf',
    secundaryColorDark: '#005662'
  },
  [THEME_PURPLE]: {
    primaryColor: '#9c27b0',
    secundaryColorLight: '#d05ce3',
    secundaryColorDark: '#6a0080'
  },
  [THEME_BLUE]: {
    primaryColor: '#01579b',
    secundaryColorLight: '#4f83cc',
    secundaryColorDark: '#002f6c'
  },
  [THEME_GREY]: {
    primaryColor: '#757575',
    secundaryColorLight: '#a4a4a4',
    secundaryColorDark: '#494949'
  },
  [THEME_RED]: {
    primaryColor: '#e57373',
    secundaryColorLight: '#ffa4a2',
    secundaryColorDark: '#af4448'  
  },
  [THEME_ORANGE]: {
    primaryColor: '#ffb74d',
    secundaryColorLight: '#ffe97d',
    secundaryColorDark: '#c88719'
  }
};