import createStyle from '../../utils/createStyle';
import { LIGHT, DARK } from '../modes';

export default createStyle('text', theme => ({
  color: 'blue',
  /*
  color: {
    [LIGHT.id]: theme.color.darkGray3,
    [DARK.id]: theme.color.lightGray3,
  }
  */
}))
