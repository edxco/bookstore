import React from 'react';

import BooksList from '../containers/BookList';
import BooksForm from '../containers/BookForm';

const App = () => (
  <div className="has-background-light">
    <BooksList />
    <BooksForm />
    <footer className="py-6 my-6" />
  </div>
);

export default App;
