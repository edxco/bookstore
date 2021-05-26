import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';

const books = () => [
  { id: Math.random(), title: 'Edd', category: 'Biography' },
  { id: Math.random(), title: 'The Edd', category: 'Horror' },
  { id: Math.random(), title: "Edd's child", category: 'Biography' },
  {
    id: Math.random(),
    title: 'How edd save the edd-land',
    category: 'History',
  },
];

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App books={books} />
  </Provider>,
  document.getElementById('root'),
);
