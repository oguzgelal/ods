import createStyle from '../utils/createStyle';
import { createThemeWithStyles } from '../utils/createTheme';

describe('get api should work properly with different mods', () => {

  it('correct mode value should be selected', () => {
    const colors = createStyle('c', theme => ({
      danger: {
        light: 'red',
        dark: 'blue'
      }
    }))

    const lightTheme = createThemeWithStyles(colors)('light');
    const darkTheme = createThemeWithStyles(colors)('dark');
    expect(lightTheme.get('c.danger')).toBe('red');
    expect(darkTheme.get('c.danger')).toBe('blue');
  })

  it('should fallback to default value if mode value not provided', () => {
    const colors = createStyle('c', theme => ({
      danger: {
        light: 'red',
        mode_fallback: 'black'
      }
    }))

    const theme = createThemeWithStyles(colors)('dark');
    expect(theme.get('c.danger')).toBe('black');
  })

  it('should return the value if value has no modes', () => {
    const colors = createStyle('c', theme => ({ danger: 'red' }))
    const theme = createThemeWithStyles(colors)('light');
    expect(theme.get('c.danger')).toBe('red');
  })

  it('should handle multiple paths', () => {
    const colors = createStyle('c', theme => ({ danger: 'red' }))
    const theme = createThemeWithStyles(colors)('light');
    expect(theme.get(['path.does.not.exist', 'bar.foo', 'c.danger'])).toBe('red');
    expect(theme.get(['path.does.not.exist', 'c.danger', 'bar.foo'])).toBe('red');
    expect(theme.get(['c.danger', 'path.does.not.exist', 'bar.foo'])).toBe('red');
  })

  it('fallback values should work', () => {
    const colors = createStyle('c', theme => ({ danger: 'red' }))
    const theme = createThemeWithStyles(colors)('light');
    expect(theme.get('path_not_present', { default: 'orange' })).toBe('orange');
    expect(theme.get(['p1', 'p2', 'p3'], { default: 'orange' })).toBe('orange');
  })

})
