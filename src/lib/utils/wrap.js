import React from 'react';
import styled from 'styled-components/macro';
import { ThemeProvider } from 'styled-components/macro';
import extendTheme from './extendTheme';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default (theme, mode) => children => (
  <ThemeProvider theme={extendTheme(theme, mode)}>
    <Wrapper>
      {children}
    </Wrapper>
  </ThemeProvider>
);
