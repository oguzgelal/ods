import React from 'react';
import docs from './LoadingSpinner.docs.md';

import LoadingSpinner from './';
import addStory, { Grid, GridItem } from '../../utils/addStory';

const addButtonStory = addStory('LoadingSpinner', docs);

addButtonStory('size', () => (
  <Grid>
    <GridItem><LoadingSpinner /></GridItem>
    <GridItem><LoadingSpinner dim="22px" /></GridItem>
    <GridItem><LoadingSpinner dim="32px" /></GridItem>
  </Grid>
))
