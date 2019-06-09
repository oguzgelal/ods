import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import createStyle from '../../utils/createStyle';
import * as intents from '../../constants/intents';
import * as sizes from '../../constants/sizes';
import * as modes from '../../constants/modes';

export const styles = createStyle('button', theme => ({

  // borders
  border: 'none',
  borderRadiusSmall: theme.borderRadius[sizes.SMALL],
  borderRadiusMedium: theme.borderRadius[sizes.MEDIUM],
  borderRadiusLarge: theme.borderRadius[sizes.LARGE],

  // padding
  paddingSmall: `${theme.gap.tb[sizes.SMALL]}px ${theme.gap.lr[sizes.SMALL]}px`,
  paddingMedium: `${theme.gap.tb[sizes.MEDIUM]}px ${theme.gap.lr[sizes.MEDIUM]}px`,
  paddingLarge: `${theme.gap.tb[sizes.LARGE]}px ${theme.gap.lr[sizes.LARGE]}px`,

  // font size
  fontSizeSmall: theme.text.fontSize[sizes.SMALL],
  fontSizeMedium: theme.text.fontSize[sizes.MEDIUM],
  fontSizeLarge: theme.text.fontSize[sizes.LARGE],

  // styles
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

  /* sizing */
  ${p => p.size === 'small' && `
    padding: ${p.theme.get(`button.paddingSmall`)};
    font-size: ${p.theme.get(`button.fontSizeSmall`)};
    border-radius: ${p.theme.get(`button.borderRadiusSmall`)}px;
  `}

  ${p => p.size === 'medium' && `
    padding: ${p.theme.get(`button.paddingMedium`)};
    font-size: ${p.theme.get(`button.fontSizeMedium`)};
    border-radius: ${p.theme.get(`button.borderRadiusMedium`)}px;
  `}

  ${p => p.size === 'large' && `
    padding: ${p.theme.get(`button.paddingLarge`)};
    font-size: ${p.theme.get(`button.fontSizeLarge`)};
    border-radius: ${p.theme.get(`button.borderRadiusLarge`)}px;
  `}

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
