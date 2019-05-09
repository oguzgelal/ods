import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import extendTheme from './extendTheme';

export default (theme, mode) => children => (
  <ThemeProvider theme={extendTheme(theme, mode)}>
    {children}
  </ThemeProvider>
);
