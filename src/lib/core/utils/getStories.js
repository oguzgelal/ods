import getStories from '../../utils/getStories';
import theme from '../theme';

export default component =>
  getStories('Core', component, theme)
