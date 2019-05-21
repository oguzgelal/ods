import createStyle from '../../utils/createStyle';
import { LIGHT, DARK } from '../../styles/modes';

export const id = 'button';
export default createStyle(id, theme => ({
  color: 'white',
  backgroundColor: {
    [LIGHT.id]: 'red',
    [DARK.id]: 'blue',
    default: 'black',
  }
}))
