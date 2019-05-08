import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import wrap from './wrap';

import extendTheme from './extendTheme';

export default (title, component, theme) => [
  storiesOf(`${title}|${component}/Light`, module)
    .addDecorator(jsxDecorator)
    .addDecorator(storyFn => wrap(theme, 'light')(storyFn()))
    .addParameters({ backgrounds: [{ name: 'Light', value: extendTheme(theme).get('background', null, 'light'), default: true }] }),
  storiesOf(`${title}|${component}/Dark`, module)
    .addDecorator(jsxDecorator)
    .addDecorator(storyFn => wrap(theme, 'dark')(storyFn()))
    .addParameters({ backgrounds: [{ name: 'Dark', value: extendTheme(theme).get('background', null, 'dark'), default: true }] })
];
