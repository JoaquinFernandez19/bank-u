import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';
//Routing

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <div>
        <App />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
