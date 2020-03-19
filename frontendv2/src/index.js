import React from 'react';
import {render} from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import Generation from './components/Generation.js';
import Dragon from './components/Dragon.js';
import { generationActionCreator } from './actions/generation.js'
import rootReducer from './reducers'
import './index.css'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

// store.subscribe(() => console.log('store updated', store.getState()));
//
// fetch('http://localhost:3000/generation')
//   .then(response => response.json())
//   .then(json => {
//     store.dispatch(generationActionCreator(json.generation))
//   });

render(
  <Provider store = {store}>
    <div>
      <h2>Dragon Stack</h2>
      <Generation />
      <Dragon />
    </div>
  </Provider>,
  document.getElementById('root')
)
