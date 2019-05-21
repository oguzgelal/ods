import get from 'lodash/get';
import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import styles from '../styles';
import createStyle from './createStyle';

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
    const val = (
      get(theme, `${path}['${modeActive}']`,
        get(theme, `${path}.default`,
          get(theme, path, null))))

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

const createThemeAcc = (_theme, _styles, stylesMerge = []) => (...overridenStyles) => mode => {

  // initiate empty theme object or use existing
  const theme = (isNil(_theme) || isEmpty(_theme)) ?
    { current: mode } :
    _theme;

  // convert object array to dict
  const overriden = (overridenStyles || [])
    .filter(s => s && s.id)
    .reduce((acc, c) => ({...acc, [c.id]: c}), {});

  // add styles to the theme
  const useStyles = _styles || styles;
  (useStyles.concat(stylesMerge)).forEach(style => {
    addToTheme(theme, overriden, style)
  })

  // attach getter method
  theme.get = getModeVal(theme, mode)

  // TODO: insert a style to the theme
  theme.extend = (..._stylesMerge) => {
    return createThemeAcc(theme, _styles, _stylesMerge)(...overridenStyles)(mode);
  }

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
