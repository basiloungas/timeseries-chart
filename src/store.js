import {createStore, compose} from 'redux';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function buildStore() {
  return createStore(
    reducers,
    composeEnhancers(),
  );
}
