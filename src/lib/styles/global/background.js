import createStyle from '../../utils/createStyle';
import { LIGHT, DARK } from '../modes';

export const id = 'background';
export default createStyle(id, theme => ({
  [LIGHT.id]: theme.color.lightGray5,
  [DARK.id]: theme.color.darkGray5,
}))
