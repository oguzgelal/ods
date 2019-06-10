import React from 'react';
import addStory, { Grid, GridItem } from '../../utils/addStory';

import Button from './';
import docs from './Button.docs.md';

import * as sizes from '../../constants/sizes';


const addButtonStory = addStory('Button', docs);

addButtonStory('size', () => (
  <Grid>
    <GridItem><Button size={sizes.XSMALL}>xSmall</Button></GridItem>
    <GridItem><Button size={sizes.SMALL}>Small</Button></GridItem>
    <GridItem><Button size={sizes.MEDIUM}>Medium</Button></GridItem>
    <GridItem><Button size={sizes.LARGE}>Large</Button></GridItem>
    <GridItem><Button size={sizes.XLARGE}>xLarge</Button></GridItem>
  </Grid>
))

addButtonStory('states', () => (
  <Grid>
    <GridItem><Button>Regular</Button></GridItem>
    <GridItem><Button disabled>Disabled</Button></GridItem>
  </Grid>
))
