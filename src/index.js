import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components/macro';
import { theme, colors } from './lib';
import { styles as buttonStyles } from './lib/components/Button';

import App from './App';
import * as serviceWorker from './serviceWorker';

const newTheme = theme
  .override(t => colors.override({ black: '#000000' }))
  .override(t => buttonStyles.override({ color: t.get('colors.black') }))

console.log('FINAL THEME', newTheme);

ReactDOM.render((
  <ThemeProvider theme={newTheme}>
    <App />
  </ThemeProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
