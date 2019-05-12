import get from 'lodash/get';
import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import { LIGHT, DARK, DEFAULT } from './modes';

import colors from './colors';
import background from './background';
import button from '../components/Button/Button.styles';

// get style value depending on the mode
const getModeVal = (theme, mode) => (path, def, modeOverride) => {
  // use overriden mode if provided, mode
  // in closure otherwise
  const modeActive = modeOverride || mode;
  // get value from theme
  const val = get(theme, path, def);
  // if no mode is provided, return resolved or default value
  if (isNil(modeActive)) return val;
  // ...
  if (isNil(val)) return isNil(def) ? val : def;
  // if val is an object that has theme
  // id as one of its keys return theme value
  if (typeof val === 'object' && !Array.isArray(val) && !isNil(val[modeActive])) return val[modeActive];
  // return value otherwise
  return val;
}

// add styles to a theme
const addToTheme = (theme, overriden, styles) => {
  theme[styles.id] = isNil(overriden[styles.id]) ?
    styles.get(theme) :
    overriden[styles.id].get(theme)
}

export const overrideTheme = _theme => (...overridenStyles) => mode => {

  // initiate empty theme object or use existing
  const theme = isEmpty(_theme) ? { current: mode } : _theme;

  // convert object array to dict
  const overriden = (overridenStyles || [])
    .filter(s => s && s.id)
    .reduce((acc, c) => ({...acc, [c.id]: c}), {});

  // add styles to the theme
  // ps: order is important
  addToTheme(theme, overriden, colors)
  addToTheme(theme, overriden, background)
  addToTheme(theme, overriden, button)

  // attach getter method
  theme.get = getModeVal(theme, mode)

  // attach overrider
  theme.override = fn => {
    const combinedOverrides = (overridenStyles || []).concat(fn(theme))
    return overrideTheme(theme)(...combinedOverrides)(mode);
  };

  return theme;
}

export const getTheme = overrideTheme({})(null);
export const light = overrideTheme({})(null)(LIGHT.id);
export const dark = overrideTheme({})(null)(DARK.id);
export default overrideTheme({})(null)(DEFAULT.id);
