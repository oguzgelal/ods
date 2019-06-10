import get from 'lodash/get';
import isNil from 'lodash/isNil';
import parseUnit from './parseUnit';

import * as modes from '../constants/modes';
import * as intents from '../constants/intents';
import * as sizes from '../constants/sizes';

// recursively test all combinations until the value is obtained
const getRecursiveAcc = (theme, path, testsInitial, tests = []) => {

  // base case - all tests have been performed
  // no value has been found
  if (tests.length === 0) return get(theme, path);

  // test path with the top value in tests array
  const current = get(theme, `${path}['${tests[0]}']`);

  // it's a hit - add value to the path, reset the tests
  // array to its initial value, and start over
  if (!isNil(current)) {
    return getRecursiveAcc(theme, `${path}['${tests[0]}']`, testsInitial, testsInitial);
  }

  // it's a miss - remove the head and recurse
  return getRecursiveAcc(theme, path, testsInitial, tests.slice(1))
}

const getRecursive = (theme, path, tests = []) => {
  return getRecursiveAcc(theme, path, tests, tests);
}

// get style value depending on the mode
export default (theme, mode) => (pathsArg, {

  // if desired value not found, default to this
  default: def,

  // get value with intent
  // will default to intents.DEFAULT
  intent: intentArg,

  // override current mode
  mode: modeArg,

  // get value with size
  // will default to sizes.MEDIUM
  size: sizeArg,

  // parse css measurement units like px, et, em etc.
  // defaults to pixels if number type provided
  parseUnit: parseUnitArg,

} = {}) => {

  // use overriden mode if provided, mode
  // in closure otherwise
  const modeActive = modeArg || mode || modes.DEFAULT;
  const modeFallback = modes.FALLBACK;
  const modeTest = [modeActive, modeFallback];

  // set an active intent
  const intentActive = intentArg || intents.DEFAULT;
  const intentFallback = intents.FALLBACK;
  const intentTest = [intentActive, intentFallback];

  // set an active size
  const sizeActive = sizeArg || sizes.DEFAULT;
  const sizeFallback = sizes.FALLBACK;
  const sizeTest = [sizeActive, sizeFallback];

  // get provided paths
  const paths = Array.isArray(pathsArg) ? pathsArg : [pathsArg];

  // return the first occurence
  for(let i = 0; i < paths.length; i++) {
    const path = paths[i];

    // get value from theme
    let val = getRecursive(theme, path, [
      ...intentTest,
      ...modeTest,
      ...sizeTest,
    ]);

    // process and return value
    if (!isNil(val)) {
      if (parseUnitArg) val = parseUnit(val);
      return val;
    }
  }

  // no value has been found so far
  // return default value
  return def;
}
