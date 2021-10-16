import {ThemeContext} from '../themes/theme.js';
import React, { useState, useContext } from 'react';

export function ThemedButton(props) {
  const theme = useContext(ThemeContext);
  // alert('RENDER');

  return (
    <button style={(theme==='light')?{ background:"#373737", color:'#f4f4f4'}:{background:'#FFFFF0', color: '#111'}}
    onClick={props.onChange}>
      {props.children}
    </button>
  );
}
