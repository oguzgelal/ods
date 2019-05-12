import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';
import modes from '../styles/modes';
import wrap from './wrap';
import { getTheme } from '../';

export default (component, docs) => (title, render) => {

  // ...
  modes.forEach(mode => {
    const storyProps = {};

    // ...
    const theme = getTheme(mode.id);

    // ...
    if (docs) storyProps.notes = { info: docs }

    // ...
    storiesOf(`${component}/${mode.id}`, module)
      .addDecorator(withInfo({ text: docs, header: false }))
      .addDecorator(jsxDecorator)
      .addDecorator(storyFn => wrap(mode.id)(storyFn()))
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
