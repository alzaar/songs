import React from 'react';
import ReactDOM from 'react-dom';
import App from './comps/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
ReactDOM.render(
  <Provider>
    <App/>
  </Provider>,
  document.getElementById('root');
)
