// global styles
import borderRadius from './global/borderRadius';
import color from './global/color';
import background from './global/background';
import text from './global/text';
import gap from './global/gap';

// components
import { styles as button} from '../components/Button';
import { styles as loadingSpinner} from '../components/LoadingSpinner';

export default [
  color,
  gap,
  text,
  background,
  borderRadius,
  button,
  loadingSpinner,
];
