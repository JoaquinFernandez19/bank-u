import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//Redux
import { loadState, saveState } from './localStorage';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';
//Routing
import { HashRouter } from 'react-router-dom';
//localstorage
const persistedStore = loadState();
const store = createStore(reducers, persistedStore);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <App />
      </div>
    </HashRouter>
  </Provider>,
  document.querySelector('#root')
);
