import createStyle from '../../utils/createStyle';
import * as modes from '../../constants/modes';

export default createStyle('background', theme => ({
  [modes.LIGHT]: theme.color.lightGray5,
  [modes.DARK]: theme.color.darkGray5,
}))
