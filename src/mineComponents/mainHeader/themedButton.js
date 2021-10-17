import {ThemeContext} from '../themes/theme.js';
import './themedButton.css';

import React, { useState, useContext } from 'react';

export function ThemedButton(props) {
  const theme = useContext(ThemeContext);

  return (
    <button className={(theme==='light')?'dark':'light'}
    onClick={props.onChange}>
      {props.children}
    </button>
  );
}
