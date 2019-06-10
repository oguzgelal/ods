import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import createStyle from '../../utils/createStyle';
import * as intents from '../../constants/intents';
import * as sizes from '../../constants/sizes';
import * as modes from '../../constants/modes';

export const styles = createStyle('button', theme => ({

  border: 'none',
  borderRadius: theme.borderRadius,
  paddingTop: theme.gap.tb,
  paddingBottom: theme.gap.tb,
  paddingLeft: theme.gap.lr,
  paddingRight: theme.gap.lr,
  fontSize: theme.text.fontSize,

  color: theme.text.color,
  colorDisabled: theme.text.colorDisabled,
  background: {
    [intents.DEFAULT]: {
      [modes.LIGHT]: theme.color.lightGray3,
      [modes.DARK]: theme.color.darkGray3,
    }
  },
  backgroundHover: {
    [intents.DEFAULT]: {
      [modes.LIGHT]: theme.color.lightGray2,
      [modes.DARK]: theme.color.darkGray2,
    }
  },
  backgroundActive: {
    [intents.DEFAULT]: {
      [modes.LIGHT]: theme.color.lightGray1,
      [modes.DARK]: theme.color.darkGray1,
    }
  },
  backgroundDisabled: {
    [intents.DEFAULT]: {
      [modes.LIGHT]: theme.color.lightGray1,
      [modes.DARK]: theme.color.darkGray4,
    }
  },
  opacityDisabled: {
    [intents.DEFAULT]: {
      [modes.LIGHT]: '0.35',
      [modes.DARK]: '0.6'
    }
  },
}))

const Wrapper = styled.button`

  /* misc */
  user-select: none;

  /* styling */
  outline: none;
  border: ${p => p.theme.get('button.border')};
  background: ${p => p.theme.get('button.background', { intent: p.intent })};
  color: ${p => p.theme.get('button.color', { intent: p.intent })};

  &:hover {
    cursor: pointer;
    background: ${p => p.theme.get('button.backgroundHover', { intent: p.intent })};
    color: ${p => p.theme.get('button.colorHover', { intent: p.intent })};
  }

  &:active {
    background: ${p => p.theme.get('button.backgroundActive', { intent: p.intent })};
    color: ${p => p.theme.get('button.colorActive', { intent: p.intent })};
  }

  padding-top: ${p => p.theme.get(`button.paddingTop`, { size: p.size })}px;
  padding-bottom: ${p => p.theme.get(`button.paddingBottom`, { size: p.size })}px;
  padding-right: ${p => p.theme.get(`button.paddingRight`, { size: p.size })}px;
  padding-left: ${p => p.theme.get(`button.paddingLeft`, { size: p.size })}px;
  border-radius: ${p => p.theme.get(`button.borderRadius`, { size: p.size })}px;
  font-size: ${p => p.theme.get(`button.fontSize`, { size: p.size })};

  /* states */
  ${p => p.disabled && `
    color: ${p.theme.get('button.colorDisabled', { intent: p.intent })};
    background: ${p.theme.get('button.backgroundDisabled', { intent: p.intent })};
    opacity: ${p.theme.get('button.opacityDisabled', { intent: p.intent })};

    &:hover,
    &:active {
      cursor: not-allowed;
      color: ${p.theme.get('button.colorDisabled', { intent: p.intent })};
      background: ${p.theme.get('button.backgroundDisabled', { intent: p.intent })};
    }
  `}
`;

const Button = propsArg => {
  const { children, ...props } = propsArg;
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  )
};

Button.propTypes = {
  disabled: PropTypes.bool,
  intent: PropTypes.oneOf(Object.values(intents)),
  size: PropTypes.oneOf(Object.values(sizes)),
};

Button.defaultProps = {
  size: sizes.MEDIUM,
  intent: intents.DEFAULT,
}

export default Button;
