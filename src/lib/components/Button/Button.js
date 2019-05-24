import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import createStyle from '../../utils/createStyle';
import { LIGHT, DARK } from '../../styles/modes';

export const styles = createStyle('button', theme => ({
  default: {
    bg: { [LIGHT.id]: theme.color.lightGray3, [DARK.id]: theme.color.darkGray3 },
    bgHover: { [LIGHT.id]: theme.color.lightGray2, [DARK.id]: theme.color.darkGray2 },
    bgActive: { [LIGHT.id]: theme.color.lightGray1, [DARK.id]: theme.color.darkGray1 },
    bgDisabled: { [LIGHT.id]: theme.color.lightGray1, [DARK.id]: theme.color.darkGray4 },
  }
}))

const Wrapper = styled.button`

  /* misc */
  user-select: none;

  /* styling */
  border: none;
  outline: none;
  background: ${p => p.theme.get('button.default.bg')};
  color: ${p => p.theme.get(['button.default.color', 'text.color'])};

  &:hover {
    cursor: pointer;
    background: ${p => p.theme.get('button.default.bgHover')};
    color: ${p => p.theme.get('button.default.colorHover')};
  }

  &:active {
    background: ${p => p.theme.get('button.default.bgActive')};
    color: ${p => p.theme.get('button.default.colorActive')};
  }

  /* sizing */
  font-size: ${p => p.theme.get(`fontSize.${p.size}`)};
  border-radius: ${p => p.theme.get(`borderRadius.${p.size}`)}px;
  padding: ${p => `
    ${p.theme.get(`gap.${p.size}.tb`)}px
    ${p.theme.get(`gap.${p.size}.lr`)}px;
  `}

  /* disabled state */
  ${p => p.disabled && `
    background: ${p.theme.get('button.default.bgDisabled')};
    color: ${p.theme.get('button.default.colorDisabled')};

    &:hover,
    &:active {
      cursor: default;
      background: ${p.theme.get('button.default.bgDisabled')};
      color: ${p.theme.get('button.default.colorDisabled')};
    }
  `}
`;

const Button = props => (
  <Wrapper {...props} />
);

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  size: 'medium',
}

export default Button;
