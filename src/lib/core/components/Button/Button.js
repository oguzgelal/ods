import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Wrapper = styled.button`
  background-color: ${p => p.theme.get('button.backgroundColor')};
  color: ${p => p.theme.get('button.color')};
`;

const Button = props => (
  <Wrapper {...props} />
);

Button.propTypes = {
};

export default Button;
