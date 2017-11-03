import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

require('./styles/app.scss');

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}

