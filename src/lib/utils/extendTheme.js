import get from 'lodash/get';
import isNil from 'lodash/isNil';

const getModeVal = (theme, mode) => (path, def, modeOverride) => {

  console.log(theme, mode, path, def, modeOverride);

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

export default (theme = {}, mode) => ({
  get: getModeVal(theme, mode),
  ...theme,
})
