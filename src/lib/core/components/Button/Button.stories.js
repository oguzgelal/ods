import React from 'react';
import Button from './';
import docs from './Button.docs.md';
import addStory from '../../utils/addStory';

const addButtonStory = addStory('Button', docs);

addButtonStory('default', () => <Button>Hello</Button>)
