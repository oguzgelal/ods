import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';
import wrap from './wrap';
import { getTheme } from '../';

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GridItem = styled.div`
  margin-right: 8px;
  &:last-of-type { margin-right: 0; }
`;

Grid.displayName = 'Grid';
GridItem.displayName = 'Item';

export { Grid, GridItem };

export default (component, docs) => (title, render) => {

  // ...
  [{ id: 'light', name: 'Light' }, { id: 'dark', name: 'Dark' }]
    .forEach(mode => {
      const storyProps = {};
      const theme = getTheme(mode.id);

      if (docs) storyProps.notes = { info: docs }

      storiesOf(`${component}`, module)
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
        .add(`${title} - ${mode.id}`, render, storyProps)
      })
}
