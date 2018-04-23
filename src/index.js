import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.renderBrowseMicrofrontend = containerId => {
  ReactDOM.render(<App />, document.getElementById(containerId));
  registerServiceWorker();
};
