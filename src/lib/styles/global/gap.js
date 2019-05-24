import createStyle from '../../utils/createStyle';

// paddings and margins - units are in pixels
export default createStyle('gap', theme => ({
  small: { lr: 7, tb: 2 },
  medium: { lr: 10, tb: 5 },
  large: { lr: 15, tb: 5 },
}))
