import createStyle from '../utils/createStyle';
import { createThemeWithStyles } from '../utils/createTheme';

describe('theme api should work correctly', () => {

  it('should initialize theme correctly', () => {
    const colors = createStyle('c', theme => ({ danger: 'red' }))
    const style = createStyle('s', theme => ({ color: theme.c.danger }))
    const theme = createThemeWithStyles(colors, style)('light');

    expect(theme.s.color).toBe('red');
    expect(typeof theme.get).toBe('function');
    expect(theme.get('s.color')).toBe('red');
  })

  it('should override theme correctly', () => {
    const colors = createStyle('c', theme => ({ danger: 'red' }));
    const style = createStyle('s', theme => ({ color: theme.c.danger }))
    const theme = createThemeWithStyles(colors, style)('light');

    const newTheme = theme.override(t => style.override({ color: 'blue' }));

    expect(newTheme.s.color).toBe('blue');
    expect(newTheme.get('s.color')).toBe('blue');
  })

  it('should override multiple styles correctly', () => {
    const colors = createStyle('c', theme => ({ danger: 'red', warning: 'orange' }))
    const style1 = createStyle('s1', theme => ({ color: theme.c.danger }))
    const style2 = createStyle('s2', theme => ({ color: theme.c.warning }))
    const theme = createThemeWithStyles(colors, style1, style2)('light');

    // add multiple override statements
    const newTheme = theme.override(
      t => style1.override({ color: 'purple' }),
      t => style2.override({ color: 'yellow' }),
    );

    expect(newTheme.s1.color).toBe('purple')
    expect(newTheme.s2.color).toBe('yellow')
    expect(newTheme.get('s1.color')).toBe('purple')
    expect(newTheme.get('s2.color')).toBe('yellow')
  })

  it('overrides should be chainable', () => {
    const colors = createStyle('c', theme => ({ danger: 'red', warning: 'orange' }))
    const style1 = createStyle('s1', theme => ({ color: theme.c.danger }))
    const style2 = createStyle('s2', theme => ({ color: theme.c.warning }))
    const theme = createThemeWithStyles(colors, style1, style2)('light')

    // add multiple override statements chained
    const newTheme = theme
      .override(t => style1.override({ color: 'purple' }))
      .override(t => style2.override({ color: 'yellow' }))

    expect(newTheme.s1.color).toBe('purple')
    expect(newTheme.s2.color).toBe('yellow')
    expect(newTheme.get('s1.color')).toBe('purple')
    expect(newTheme.get('s2.color')).toBe('yellow')
  })


  it('chained override functions should receive the updated theme', () => {
    const colors = createStyle('c', theme => ({ danger: 'black' }))
    const style1 = createStyle('s1', theme => ({ color: 'purple' }))
    const style2 = createStyle('s2', theme => ({ color: 'yellow' }))
    const theme = createThemeWithStyles(colors, style1, style2)('light')

    // add multiple override statements chained
    // overrides should be available for the following
    // override statements on the chain
    const newTheme = theme
      .override(t => colors.override({ danger: 'red' }))
      .override(t => style1.override({ color: t.c.danger }))
      .override(t => colors.override({ danger: 'blue' }))
      .override(t => style2.override({ color: t.c.danger }))

    expect(newTheme.s1.color).toBe('red')
    expect(newTheme.s2.color).toBe('blue')
    expect(newTheme.get('s1.color')).toBe('red')
    expect(newTheme.get('s2.color')).toBe('blue')
  })

  it('extending theme with new styles should work', () => {
    const style = createStyle('style', theme => ({ danger: 'black' }))
    const theme = createThemeWithStyles(style)('light')
    // create a new style that is not a part of the theme
    const newStyle = createStyle('new', theme => ({ danger: 'blue' }))
    // extend the theme with the new style
    const newTheme = theme.extend(newStyle)
    expect(newTheme.get('new.danger')).toBe('blue');
  })

  it('extending theme with multiple new styles should work', () => {
    const style = createStyle('style', theme => ({ danger: 'black' }))
    const theme = createThemeWithStyles(style)('light')
    // create new styles that is not a part of the theme
    const newStyle1 = createStyle('new1', theme => ({ danger: 'blue' }))
    const newStyle2 = createStyle('new2', theme => ({ danger: 'black' }))
    // extend the theme with the new style
    const newTheme = theme.extend(newStyle1, newStyle2);
    const newThemeChained = theme.extend(newStyle1).extend(newStyle2);
    expect(newTheme.get('new1.danger')).toBe('blue');
    expect(newTheme.get('new2.danger')).toBe('black');
    expect(newThemeChained.get('new1.danger')).toBe('blue');
    expect(newThemeChained.get('new2.danger')).toBe('black');
  })

  it('extending theme should play along well with chaining', () => {
    const style = createStyle('style', theme => ({ danger: 'black' }))
    const theme = createThemeWithStyles(style)('light');
    // create a new style
    const newStyle = createStyle('new', theme => ({ danger: 'blue' }))
    // extend theme with new style, and chain it with an override
    // using the value of the extended style
    const newTheme = theme
      .extend(newStyle)
      .override(t => style.override({ danger: t.get('new.danger') }))

    expect(newTheme.get('new.danger')).toBe('blue')
  })

})
