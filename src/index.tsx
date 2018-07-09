import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import {IndexPage} from './page/Index/IndexPage';
import {unregister} from './registerServiceWorker';

ReactDOM.render(
  <IndexPage />,
  document.getElementById('root') as HTMLElement
);
unregister();
