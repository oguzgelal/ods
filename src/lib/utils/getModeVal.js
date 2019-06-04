import get from 'lodash/get';
import isNil from 'lodash/isNil';
import parseUnit from './parseUnit';
import transparentize from './transparentize';

// get style value depending on the mode
export default (theme, mode) => (pathsArg, {
  // if desired value not found, default to this
  default: def,
  // override current mode
  mode: modeOverride,
  // parse css measurement units like px, et, em etc.
  // defaults to pixels if number type provided
  parseUnit: parseUnitArg,
  // polished transparentize method
  // https://polished.js.org/docs/#transparentize
  transparentize: transparentizeArg,
} = {}) => {
  // use overriden mode if provided, mode
  // in closure otherwise
  const modeActive = modeOverride || mode;
  // get provided paths
  const paths = Array.isArray(pathsArg) ? pathsArg : [pathsArg];
  // return the first occurence
  for(let i = 0; i < paths.length; i++) {
    const path = paths[i];
    // get themed value from given path
    let val = (
      get(theme, `${path}['${modeActive}']`,
        get(theme, `${path}.default`,
          get(theme, path, null))))

    // return value
    if (!isNil(val)) {
      if (parseUnitArg) val = parseUnit(val);
      if (!isNil(transparentizeArg)) val = transparentize(transparentizeArg, val);
      return val;
    }
  }
  // no value has been returned so far. return default value
  return def;
}
