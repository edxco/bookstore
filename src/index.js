import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import uniqid from 'uniqid';
import App from './components/App';
import reducers from './reducers';
import { createBook } from './actions';

const store = createStore(reducers);

const INITIAL_STATE = [
  { id: uniqid.process(), title: 'Edd', category: 'Biography' },
  { id: uniqid.process(), title: 'The Edd', category: 'Horror' },
  { id: uniqid.process(), title: "Edd's child", category: 'Biography' },
  {
    id: uniqid.process(),
    title: 'How edd save the edd-land',
    category: 'History',
  },
];

INITIAL_STATE.map((book) => store.dispatch(createBook(book)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
