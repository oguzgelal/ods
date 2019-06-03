import createStyle from '../../utils/createStyle';

export default createStyle('text', theme => ({
  defaultColor: { light: theme.color.darkGray3, dark: theme.color.lightGray3 },
  defaultColorDisabled: { light: theme.color.gray1, dark: theme.color.gray5 },
  fontSizeSmall: '9pt',
  fontSizeMedium: '11pt',
  fontSizeLarge: '13pt',
  fontFamilySans: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  fontFamilyMono: `"SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Courier, monospace;`,
}))
