import React from 'react';
import Button from './Button';

import getStories from '../../utils/getStories';

getStories('Button').forEach(stories => {
  stories.add('default', () => <Button>Hello</Button>)
})
