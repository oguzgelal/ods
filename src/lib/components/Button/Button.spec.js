import React from 'react';
import ReactDOM from 'react-dom';
import Button from './';
import wrap from '../../utils/wrap';

it('renders without crashing', () => {
  ReactDOM.render(wrap()(<Button />),
    document.createElement('div'));
});
