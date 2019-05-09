import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import wrap from './wrap';
import extendTheme from './extendTheme';

export default (root, themeRaw, modes = []) => (component, docs) => (title, render) => {

  // ...
  modes.forEach(mode => {
    const storyProps = {};

    // ...
    const theme = extendTheme(themeRaw, mode.id);

    // ...
    if (docs) storyProps.notes = { markdown: docs }

    // ...
    storiesOf(`${root}|${component}/${mode.id}`, module)
      .addDecorator(jsxDecorator)
      .addDecorator(storyFn => wrap(themeRaw, mode.id)(storyFn()))
      .addParameters({
        backgrounds: [{
          name: mode.name,
          value: theme.get('background', null, mode.id),
          default: true
        }]
      })
      .add(title, render, storyProps)
    })
}
