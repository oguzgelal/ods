import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { id } from './Button.styles';

const Wrapper = styled.button`
  background-color: ${p => p.theme.get(`${id}.backgroundColor`)};
  color: ${p => p.theme.get(`${id}.color`)};
`;

const Button = props => (
  <Wrapper {...props} />
);

Button.propTypes = {
};

export default Button;
