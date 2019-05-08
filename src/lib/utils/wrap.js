import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import extendTheme from './extendTheme';

export default (theme, activeTheme) => children => (
  <ThemeProvider theme={extendTheme(theme, activeTheme)}>
    {children}
  </ThemeProvider>
);
