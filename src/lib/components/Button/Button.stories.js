import React from 'react';
import Button from './';
import docs from './Button.docs.md';
import addStory, { Grid, GridItem } from '../../utils/addStory';

const addButtonStory = addStory('Button', docs);

addButtonStory('size', () => (
  <Grid>
    <GridItem><Button size="small">Small</Button></GridItem>
    <GridItem><Button size="medium">Medium</Button></GridItem>
    <GridItem><Button size="large">Large</Button></GridItem>
  </Grid>
))

addButtonStory('states', () => (
  <Grid>
    <GridItem><Button>Regular</Button></GridItem>
    <GridItem><Button disabled>Disabled</Button></GridItem>
  </Grid>
))
