import {createStore, compose, applyMiddleware} from 'redux';
import createReduxSagas from 'redux-saga';
import persistState from 'redux-localstorage';
import rootReducer from 'reducers';

import rootSaga from 'sagas';

const reduxSaga = createReduxSagas();
const enhancer = compose(
  applyMiddleware(reduxSaga),
  persistState(null),
  window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

export default (initalState = {}) => {
  const store = createStore(rootReducer, initalState, enhancer);

  reduxSaga.run(rootSaga);
  return store;
};
