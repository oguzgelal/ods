import prepare from '../../utils/prepare';
import { LIGHT, DARK } from '../../styles/modes';

export const id = 'button';
export default prepare(id, theme => ({
  color: 'white',
  backgroundColor: {
    [LIGHT.id]: 'red',
    [DARK.id]: 'blue'
  }
}))
