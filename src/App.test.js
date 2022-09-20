import { render } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import ReactJSApp from './App';

test('render without crashing', () => {
  const div = document.createElement('div');
  render(<ReactJSApp />, div);
  unmountComponentAtNode(div);
});
