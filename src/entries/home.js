import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
//import data from '../api.json';
// import data from '../schemas/index.js';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';

import { Map as map } from 'immutable';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// const logger = ({ dispatch, getState }) => next => action => {
//   console.log('estado anterior:', getState().toJS());
//   console.log('enviando acción:', action);
//   const result = next(action);
//   console.log('nuevo estado   :', getState().toJS());
//   return result;
// };

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(applyMiddleware(logger))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store.getState());

const homeContainer = document.getElementById('home-container');

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  homeContainer
);
