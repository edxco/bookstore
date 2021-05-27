import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';
import { createBook } from './actions';

const store = createStore(reducers);
const INITIAL_STATE = [
  { id: Math.random(), title: 'Edd', category: 'Biography' },
  { id: Math.random(), title: 'The Edd', category: 'Horror' },
  { id: Math.random(), title: "Edd's child", category: 'Biography' },
  {
    id: Math.random(),
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
