import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//Redux
import { loadState, saveState } from './localStorage';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';
//Routing
import { BrowserRouter } from 'react-router-dom';
//localstorage
const persistedStore = loadState();
const store = createStore(reducers, persistedStore);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <App />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
