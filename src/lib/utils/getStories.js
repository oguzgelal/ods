import { storiesOf } from '@storybook/react';
import wrap from './wrap';

export default (title, component, theme) => [
  storiesOf(`${title}|${component}/Light`, module)
    .addDecorator(storyFn => wrap(theme, 'light')(storyFn())),
  storiesOf(`${title}|${component}/Dark`, module)
    .addDecorator(storyFn => wrap(theme, 'dark')(storyFn()))
];
