import merge from 'lodash/merge';


// TODO: a literal being merged with an object should
// result as the literal overriding the object completely
// this is because of overriding themes
// ie: { light: 'darkBlue', dark: 'lightBlue' } <-- 'blue'
// background: {...} should be background: 'blue'
export default (id, themeFn) => ({ id,
  get: theme => themeFn(theme),
  override: overrides => ({ id,
    get: theme => merge(themeFn(theme), overrides),
  })
})
