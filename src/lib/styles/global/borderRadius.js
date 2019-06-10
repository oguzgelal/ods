import createStyle from '../../utils/createStyle';
import * as sizes from '../../constants/sizes';

// units are in pixels
export default createStyle('borderRadius', theme => ({
  [sizes.XSMALL]: 2,
  [sizes.SMALL]: 3,
  [sizes.MEDIUM]: 3,
  [sizes.LARGE]: 3,
  [sizes.XLARGE]: 4,
}))
