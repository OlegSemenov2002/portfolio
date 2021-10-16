import React from 'react';
export const themes = {
  light: {
    background: '#FFFFF0',
    color: '#111',
  },
  dark: {
    background: '#373737',
    color:'#f4f4f4',
  },
};

export const ThemeContext = React.createContext(
  themes.dark
);
