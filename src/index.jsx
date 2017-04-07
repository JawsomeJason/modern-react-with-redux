import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/config';

const store = configureStore();
const rootEl = document.querySelector('.container');

let render = () => {
  // eslint-disable-next-line global-require
  const Root = require('./components/app').default;
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    rootEl,
  );
};

if (module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render;
  const renderError = (error) => {
    ReactDOM.render(
      <div>error: {error}</div>,
      rootEl,
    );
  };

  render = () => {
    try {
      renderApp();
    } catch (error) {
      renderError(error);
    }
  };

  module.hot.accept('./components/app', () => {
    setTimeout(render);
  });
}

render();
