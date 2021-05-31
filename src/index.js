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
  {
    id: uniqid.process(),
    title: 'Edd',
    category: 'Biography',
    author: 'Me',
    totalChapter: 100,
    chapter: 1,
  },
  {
    id: uniqid.process(),
    title: 'The Edd',
    category: 'Horror',
    author: 'He',
    totalChapter: 320,
    chapter: 20,
  },
  {
    id: uniqid.process(),
    title: "Edd's child",
    category: 'Biography',
    author: 'She',
    totalChapter: 400,
    chapter: 60,
  },
  {
    id: uniqid.process(),
    title: 'How edd save the edd-land',
    category: 'History',
    author: 'You',
    totalChapter: 400,
    chapter: 120,
  },
];

INITIAL_STATE.map((book) => store.dispatch(createBook(book)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
