import get from 'lodash/get';
import isNil from 'lodash/isNil';

const extend = (props, activeTheme) => (path, def, activeThemeOverride) => {

  // use overriden theme if provided, theme
  // in closure otherwise
  const theme = activeThemeOverride || activeTheme;

  // get value from theme
  const val = get(props, path, def);

  // if no theme is provided, return resolved or default value
  if (isNil(theme)) return val;

  // if val is an object that has theme
  // id as one of its keys return theme value
  if (typeof val === 'object' && !Array.isArray(val) && !isNil(val[theme])) return val[theme];

  // return value otherwise
  return val;
}

export default (theme = {}, activeTheme) => ({
  get: extend(theme, activeTheme),
  ...theme,
})
