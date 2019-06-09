import createStyle from '../../utils/createStyle';
import * as sizes from '../../constants/sizes';

// paddings and margins - units are in pixels
export default createStyle('gap', theme => ({
  lr: {
    [sizes.SMALL]: 7,
    [sizes.MEDIUM]: 10,
    [sizes.LARGE]: 15,
  },
  tb: {
    [sizes.SMALL]: 2,
    [sizes.MEDIUM]: 5,
    [sizes.LARGE]: 5
  },
}))
