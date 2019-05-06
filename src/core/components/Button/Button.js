import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Wrapper = styled.button`
  
`;

const Button = props => (
  <Wrapper {...props} />
);

Button.propTypes = {
};

export default Button;
