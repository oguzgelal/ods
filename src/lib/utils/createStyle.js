import merge from 'lodash/merge';

export default (id, themeFn) => ({ id,
  get: theme => themeFn(theme),
  override: overrides => ({ id,
    get: theme => merge(themeFn(theme), overrides),
  })
})
