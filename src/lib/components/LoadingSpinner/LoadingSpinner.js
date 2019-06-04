import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components/macro';
import isNil from 'lodash/isNil';

import createStyle from '../../utils/createStyle';
import parseUnit from '../../utils/parseUnit';

export const styles = createStyle('loadingSpinner', theme => ({
  thickness: 2,
  defaultDim: 14,
  animationDuration: '0.8s',
  // color
  defaultColor: theme.text.defaultColor,
}))

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Wrapper = styled.div`
  border-radius: 50%;
  width: ${p => p.theme.get('loadingSpinner.defaultDim', { parseUnit: true })};
  height: ${p => p.theme.get('loadingSpinner.defaultDim', { parseUnit: true })};
  ${p => !isNil(p.dim) && `
    width: ${parseUnit(p.dim)};
    height: ${parseUnit(p.dim)};
  `}

  animation-name: ${spin};
  animation-duration: ${p => p.theme.get('loadingSpinner.animationDuration')};
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  user-select: none;

  &:after {
    border-radius: 50%;
    width: ${p => p.theme.get('loadingSpinner.defaultDim')}px;
    height: ${p => p.theme.get('loadingSpinner.defaultDim')}px;
  }

  border: ${p => `${p.theme.get('loadingSpinner.thickness', {parseUnit: true})} solid ${p.theme.get('loadingSpinner.defaultColor')}`};
  border-left: ${p => `${p.theme.get('loadingSpinner.thickness', {parseUnit: true})} solid ${p.theme.get('loadingSpinner.defaultColor', {transparentize: 0.8})}`};
`;

const LoadingSpinner = props => (
  <Wrapper dim={props.dim}>
    {props.children}
  </Wrapper>
);

LoadingSpinner.propTypes = {
  children: PropTypes.string,
  dim: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default LoadingSpinner;
