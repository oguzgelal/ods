import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';
import wrap from './wrap';
import extendTheme from './extendTheme';

export default (root, getTheme, modes = []) => (component, docs) => (title, render) => {

  // ...
  modes.forEach(mode => {
    const storyProps = {};

    // ...
    const theme = extendTheme(getTheme(), mode.id);

    // ...
    if (docs) storyProps.notes = { info: docs }

    // ...
    storiesOf(`${root}|${component}/${mode.id}`, module)
      .addDecorator(withInfo({ text: docs, header: false }))
      .addDecorator(jsxDecorator)
      .addDecorator(storyFn => wrap(getTheme(), mode.id)(storyFn()))
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
