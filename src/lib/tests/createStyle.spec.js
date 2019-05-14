import createStyle from '../utils/createStyle';

describe('create style should work correctly', () => {

  it('create style should wrap the style correctly', () => {

    // create style function
    const style = createStyle('test-theme', theme => ({ color: 'red' }))
    expect(style.id).toBe('test-theme');
    expect(typeof style.get).toBe('function');
    expect(typeof style.override).toBe('function');

    // override style
    const overriden = style.override({ color: 'blue' });
    expect(overriden.id).toBe('test-theme');
    expect(typeof overriden.get).toBe('function');
  })

  it('create style - get should work correctly', () => {

    // create style function and get
    const style = createStyle('test-theme', theme => ({ color: theme.c }))
    const theme = style.get({ c: 'red' })

    // color should be red because the `c` parameter in
    // the theme has a value of `red`, which is what the
    // style function uses
    expect(theme.color).toBe('red');
  })

  it('create style - override should work correctly', () => {

    // create style function
    const style = createStyle('test-theme', theme => ({ color: theme.c }))
    // override style with blue
    const overriden = style.override({ color: 'blue' });
    // get style using a theme with a different value for color
    const theme = overriden.get({ c: 'red' })

    // color is overriden to blue, so even if the
    // theme is different, the result should end
    // up being the overriden value instead of what
    // is provided in the theme
    expect(theme.color).toBe('blue');
  })

})
