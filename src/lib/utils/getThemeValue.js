import get from 'lodash/get';
import isNil from 'lodash/isNil';
import parseUnit from './parseUnit';

import * as intents from '../constants/intents';

/* Ways to declare styles

  *** TODO: document better ***

  1. intent and mode given
  <arg>: {
    <intentN>: {
      <modeN>: 'value-iN-mN'
    },
  }

  2. intent given
  <arg>: {
    <intentN>: 'value-iN'
  }

  3. mode given
  <arg>: {
    <modeN>: 'value-mN'
  }

  4. no mode or no intent given
  <arg>: 'value'

*/

// get style value depending on the mode
export default (theme, mode) => (pathsArg, {

  // if desired value not found, default to this
  default: def,

  // get value with intent
  // will default to intents.DEFAULT (default)
  intent: intentArg,

  // override current mode
  mode: modeOverride,

  // parse css measurement units like px, et, em etc.
  // defaults to pixels if number type provided
  parseUnit: parseUnitArg,

} = {}) => {

  // use overriden mode if provided, mode
  // in closure otherwise
  const modeActive = modeOverride || mode;

  // set an active intent
  const intentActive = intentArg || intents.DEFAULT;

  // get provided paths
  const paths = Array.isArray(pathsArg) ? pathsArg : [pathsArg];

  // return the first occurence
  for(let i = 0; i < paths.length; i++) {
    const path = paths[i];

    // get value from given path theme and intent
    let valWithIntentAndMode = get(theme, `${path}['${intentActive}']['${modeActive}']`);
    let valWithIntent = get(theme, `${path}['${intentActive}']`);
    let valWithMode = get(theme, `${path}['${modeActive}']`);
    let val = get(theme, path);

    // pick non-nill value
    let valFinal = (
      valWithIntentAndMode ||
      valWithIntent ||
      valWithMode ||
      val
    );

    // process and return value
    if (!isNil(valFinal)) {
      if (parseUnitArg) valFinal = parseUnit(valFinal);
      return valFinal;
    }
  }

  // no value has been found so far
  // return default value
  return def;
}
