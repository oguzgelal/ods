import createStyle from '../../utils/createStyle';
import * as sizes from '../../constants/sizes';
import * as modes from '../../constants/modes';
import * as intents from '../../constants/intents';

export default createStyle('text', theme => ({
  fontSize: {
    [sizes.SMALL]: '9pt',
    [sizes.MEDIUM]: '11pt',
    [sizes.LARGE]: '13pt',
  },
  fontFamilySans: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  fontFamilyMono: `"SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Courier, monospace;`,

  color: {
    [intents.DEFAULT]: {
      [modes.LIGHT]: theme.color.darkGray3,
      [modes.DARK]: theme.color.lightGray3,
    }
  },
  colorDisabled: {
    [intents.DEFAULT]: {
      [modes.LIGHT]: theme.color.gray1,
      [modes.DARK]: theme.color.gray5,
    }
  },
}))
