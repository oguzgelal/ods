import get from 'lodash/get';
import isNil from 'lodash/isNil';

// get style value depending on the mode
export default (theme, mode) => (pathsArg, def, modeOverride) => {
  // use overriden mode if provided, mode
  // in closure otherwise
  const modeActive = modeOverride || mode;
  // get provided paths
  const paths = Array.isArray(pathsArg) ? pathsArg : [pathsArg];
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
