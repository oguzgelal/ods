import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import createStyle from '../../utils/createStyle';
import get from 'lodash/get';

export const styles = createStyle('button', theme => ({
  // borders
  border: 'none',
  borderRadiusSmall: theme.borderRadius.small,
  borderRadiusMedium: theme.borderRadius.medium,
  borderRadiusLarge: theme.borderRadius.large,
  // padding
  paddingSmall: `${theme.gap.tbSmall}px ${theme.gap.lrSmall}px`,
  paddingMedium: `${theme.gap.tbMedium}px ${theme.gap.lrMedium}px`,
  paddingLarge: `${theme.gap.tbLarge}px ${theme.gap.lrLarge}px`,
  // font size
  fontSizeSmall: theme.text.fontSizeSmall,
  fontSizeMedium: theme.text.fontSizeMedium,
  fontSizeLarge: theme.text.fontSizeLarge,
  // default styling
  defaultBackground: { light: theme.color.lightGray3, dark: theme.color.darkGray3 },
  defaultBackgroundHover: { light: theme.color.lightGray2, dark: theme.color.darkGray2 },
  defaultBackgroundActive: { light: theme.color.lightGray1, dark: theme.color.darkGray1 },
  defaultBackgroundDisabled: { light: theme.color.lightGray1, dark: theme.color.darkGray4 },
  defaultOpacityDisabled: { light: '0.35', dark: '0.6' },
  defaultColor: theme.text.defaultColor,
  defaultColorDisabled: theme.text.defaultColorDisabled,
}))

const Wrapper = styled.button`

  /* misc */
  user-select: none;

  /* styling */
  outline: none;
  border: ${p => p.theme.get('button.border')};
  background: ${p => p.theme.get('button.defaultBackground')};
  color: ${p => p.theme.get(['button.defaultColor'])};

  &:hover {
    cursor: pointer;
    background: ${p => p.theme.get('button.defaultBackgroundHover')};
    color: ${p => p.theme.get('button.default.colorHover')};
  }

  &:active {
    background: ${p => p.theme.get('button.defaultBackgroundActive')};
    color: ${p => p.theme.get('button.default.colorActive')};
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

  /* intents */
  ${p => p.intent === 'default' && ``}
  ${p => p.intent === 'primary' && ``}
  ${p => p.intent === 'success' && ``}
  ${p => p.intent === 'warning' && ``}
  ${p => p.intent === 'danger' && ``}

  /* states */
  ${p => p.disabled && `
    color: ${p.theme.get('button.defaultColorDisabled')};
    background: ${p.theme.get('button.defaultBackgroundDisabled')};
    opacity: ${p.theme.get('button.defaultOpacityDisabled')};

    &:hover,
    &:active {
      cursor: not-allowed;
      color: ${p.theme.get('button.defaultColorDisabled')};
      background: ${p.theme.get('button.defaultBackgroundDisabled')};
    }
  `}
`;

const Button = props => (
  <Wrapper {...props} />
);

Button.propTypes = {
  disabled: PropTypes.bool,
  intent: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  size: 'medium',
  intent: 'default',
}

export default Button;
