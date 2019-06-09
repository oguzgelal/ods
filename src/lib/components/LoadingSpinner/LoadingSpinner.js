import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components/macro';
import isNil from 'lodash/isNil';
import { transparentize } from 'polished';

import createStyle from '../../utils/createStyle';
import parseUnit from '../../utils/parseUnit';

import * as intents from '../../constants/intents';

export const styles = createStyle('loadingSpinner', theme => ({
  dim: 14,
  thickness: 2,
  animationDuration: '0.8s',
  // color
  color: theme.text.color,
}))

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Wrapper = styled.div`
  border-radius: 50%;
  width: ${p => p.theme.get('loadingSpinner.dim', { parseUnit: true })};
  height: ${p => p.theme.get('loadingSpinner.dim', { parseUnit: true })};
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
    width: ${p => p.theme.get('loadingSpinner.dim')}px;
    height: ${p => p.theme.get('loadingSpinner.dim')}px;
  }

  border: ${p => `
    ${p.theme.get('loadingSpinner.thickness', { parseUnit: true })} solid
    ${p.theme.get('loadingSpinner.color', { intent: p.intent })}
  `};

  border-left: ${p => `
    ${p.theme.get('loadingSpinner.thickness', { parseUnit: true })} solid
    ${transparentize(0.8, p.theme.get('loadingSpinner.color', { intent: p.intent }))}
  `};
`;

const LoadingSpinner = propsArg => {
  const { children, ...props } = propsArg;
  return (
    <Wrapper {...props} >
      {children}
    </Wrapper>
  )
};

LoadingSpinner.propTypes = {
  children: PropTypes.string,
  dim: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  intent: intents.DEFAULT,
};

export default LoadingSpinner;
