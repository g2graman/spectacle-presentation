import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import Presentation from './Presentation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Presentation />, div);
  unmountComponentAtNode(div);
});
