import createStyle from '../../utils/createStyle';
import * as sizes from '../../constants/sizes';

// paddings and margins - units are in pixels
export default createStyle('gap', theme => ({
  lr: {
    [sizes.XSMALL]: 9,
    [sizes.SMALL]: 18,
    [sizes.MEDIUM]: 20,
    [sizes.LARGE]: 28,
    [sizes.XLARGE]: 32,
  },
  tb: {
    [sizes.XSMALL]: 3,
    [sizes.SMALL]: 6,
    [sizes.MEDIUM]: 8,
    [sizes.LARGE]: 10,
    [sizes.XLARGE]: 12,
  },
}))
