import { configure, addParameters } from '@storybook/react';

const req = require.context('../src/lib', true, /\.stories\.js$/);

addParameters({
  options: {
    showAddonPanel: false,
    isToolshown: false,
  }
})

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
