import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { Button } from './lib/core';

const Wrapper = styled.div``;

const App = props => (
  <Wrapper>
    <Button>hey</Button>
    Hello world!
  </Wrapper>
);

App.propTypes = {
};

export default App;
