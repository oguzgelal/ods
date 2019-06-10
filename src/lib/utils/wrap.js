import React from 'react';
import styled from 'styled-components/macro';
import { ThemeProvider } from 'styled-components/macro';
import { getTheme } from '../';
import * as modes from '../constants/modes';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default (mode = modes.DEFAULT) => children => (
  <ThemeProvider theme={getTheme(mode)}>
    <Wrapper>
      {children}
    </Wrapper>
  </ThemeProvider>
);
