import React from 'react';
import Button from './Button';
import docs from './Button.docs.md';

import getStories from '../../utils/getStories';

getStories('Button').map(stories => {
  stories.add('default', () => <Button>Hello</Button>, {
    notes: { markdown: docs }
  })
})
