import button from './components/Button/Button.styles';

export const modes = [
  { name: 'Light', id: 'light' },
  { name: 'Dark', id: 'dark' },
]

export const colors = {
  black:      '#182026',
  darkGrey1:  '#182026',
  darkGrey2:  '#202B33',
  darkGrey3:  '#293742',
  darkGrey4:  '#30404D',
  darkGrey5:  '#394B59',
  gray1:      '#5C7080',
  gray2:      '#738694',
  gray3:      '#8A9BA8',
  gray4:      '#A7B6C2',
  gray5:      '#BFCCD6',
  lightGrey1: '#CED9E0',
  lightGrey2: '#D8E1E8',
  lightGrey3: '#E1E8ED',
  lightGrey4: '#EBF1F5',
  lightGrey5: '#F5F8FA',
  white:      '#FFFFFF',
}

export default {
  colors,
  background: {
    light: colors.lightGrey5,
    dark: colors.darkGrey5,
  },
  button
}
