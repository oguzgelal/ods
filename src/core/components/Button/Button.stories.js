import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Core/Button', module)
  .add('default', () => <Button>Hello</Button>)
