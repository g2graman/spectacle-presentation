import * as React from 'react';
import { render } from 'react-dom';

import './index.css';
import Presentation from './presentation/Presentation';
import registerServiceWorker from './registerServiceWorker';

render(
  <Presentation />,
  document.getElementById('root')
);

registerServiceWorker();

if (module.hot && module.hot.accept) {
    module.hot.accept();
}
