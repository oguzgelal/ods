import merge from 'lodash/merge';

export default (id, themeFn) => ({
  id,
  get: theme => themeFn(theme),
  override: overrideObj => ({
    id,
    get: theme => merge(themeFn(theme), overrideObj),
  })
})
