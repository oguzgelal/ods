import createStyle from '../utils/createStyle';
import { id as colorsId } from './colors';
import { LIGHT, DARK } from './modes';

export const id = 'background';
export default createStyle(id, theme => ({
  [LIGHT.id]: theme[colorsId].lightGrey5,
  [DARK.id]: theme[colorsId].darkGrey5,
}))
