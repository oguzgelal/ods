import createStyle from '../utils/createStyle';
import { createThemeWithStyles } from '../utils/createTheme';

describe('theme values should be overriden correctly', () => {

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

    const newTheme = theme.override(
      t => style1.override({ color: 'purple' }),
      t => style2.override({ color: 'yellow' }),
    );

    expect(newTheme.s1.color).toBe('purple')
    expect(newTheme.s2.color).toBe('yellow')
    expect(newTheme.get('s1.color')).toBe('purple')
    expect(newTheme.get('s2.color')).toBe('yellow')
  })

  it('overrides should be chainable', () => {})
  it('chained override functions should receive the updated theme', () => {})

})
