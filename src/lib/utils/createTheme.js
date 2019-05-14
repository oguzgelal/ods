import get from 'lodash/get';
import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import styles from '../styles';

// get themed value from given path
const getVal = (theme, path, modeActive) => {
  // get value from theme
  const val = get(theme, path, null);
  // val is an object
  if (typeof val === 'object' && !Array.isArray(val)) {
    // if no mode is provided, return default value
    if (isNil(modeActive) && !isNil(val.default)) return val.default;
    // if no mode provided and there is no default value, return val
    else if (isNil(modeActive) && isNil(val.default)) return val;
    // val has value for provided mode, return theme value
    else if (!isNil(val[modeActive])) return val[modeActive];
    // val has no value for provided mode, return fallback (default) value
    else if (!isNil(val.default)) return val.default;
    // val has no value for provided mode and has no default value
    // return fallback (default) value
    else return val;
  }
  // return value otherwise
  return val;
}

// get style value depending on the mode
const getModeVal = (theme, mode) => (_paths, def, modeOverride) => {
  // use overriden mode if provided, mode
  // in closure otherwise
  const modeActive = modeOverride || mode;
  // get provided paths
  const paths = Array.isArray(_paths) ? _paths : [_paths];
  // return the first occurence
  for(let i = 0; i < paths.length; i++) {
    const path = paths[i];
    // get themed value from given path
    const val = getVal(theme, path, def, modeActive);
    // return value
    if (!isNil(val)) return val;
  }
  // no value has been returned so far. return default value
  return def;
}

// add styles to a theme
const addToTheme = (theme, overriden, styles) => {
  theme[styles.id] = isNil(overriden[styles.id]) ?
    styles.get(theme) :
    overriden[styles.id].get(theme)
}

const createThemeAcc = (_theme, _styles) => (...overridenStyles) => mode => {

  // initiate empty theme object or use existing
  const theme = (isNil(_theme) || isEmpty(_theme)) ?
    { current: mode } :
    _theme;

  // convert object array to dict
  const overriden = (overridenStyles || [])
    .filter(s => s && s.id)
    .reduce((acc, c) => ({...acc, [c.id]: c}), {});

  // add styles to the theme
  (_styles || styles).forEach(style => {
    addToTheme(theme, overriden, style)
  })

  // attach getter method
  theme.get = getModeVal(theme, mode)

  // attach overrider
  theme.override = (...overrideFunctions) => {
    const combinedOverrides = (overridenStyles || []).concat(
      overrideFunctions.map(fn => fn(theme)))

    return createThemeAcc(theme, _styles)(...combinedOverrides)(mode);
  };

  return theme;
}

export const createThemeWithStyles = (...styles) => mode => {
  return createThemeAcc({}, styles)(null)(mode);
}

export default mode => {
  return createThemeAcc({}, null)(null)(mode);
};
