import React from 'react';
import styled from 'styled-components/macro';
import { ThemeProvider } from 'styled-components/macro';
import { getTheme } from '../';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default (mode = 'light') => children => (
  <ThemeProvider theme={getTheme(mode)}>
    <Wrapper>
      {children}
    </Wrapper>
  </ThemeProvider>
);
