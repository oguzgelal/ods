import prepare from '../utils/prepare';
import { id as colorsId } from './colors';
import { LIGHT, DARK } from './modes';

export const id = 'background';
export default prepare(id, theme => ({
  [LIGHT.id]: theme[colorsId].lightGrey5,
  [DARK.id]: theme[colorsId].darkGrey5,
}))
