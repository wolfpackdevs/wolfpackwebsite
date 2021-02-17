import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// redux provider
import {Provider} from 'react-redux';
// redux store
import STORE from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store = {STORE} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
