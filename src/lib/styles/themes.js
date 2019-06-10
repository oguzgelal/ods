import * as modes from '../constants/modes';
import createTheme from '../utils/createTheme';

export const getTheme = createTheme;
export const light = createTheme(modes.LIGHT);
export const dark = createTheme(modes.DARK);
export const theme = createTheme(modes.LIGHT);
export default theme;
