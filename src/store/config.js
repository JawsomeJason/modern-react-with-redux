import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../store/reducers/index';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    console.log('is hot');
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../store/reducers', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('../store/reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
