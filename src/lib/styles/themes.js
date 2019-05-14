import { LIGHT, DARK, DEFAULT } from './modes';
import createTheme from '../utils/createTheme';

export const getTheme = createTheme;
export const light = createTheme(LIGHT.id);
export const dark = createTheme(DARK.id);
export const theme = createTheme(DEFAULT.id);
