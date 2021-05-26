import React from 'react';
import PropTypes from 'prop-types';
import BooksList from './BookList';
import BooksForm from './BooksForm';

const App = ({ books }) => (

  <div>
    <BooksList books={books} />
    <BooksForm />
  </div>
);
App.propTypes = {
  books: PropTypes.objectOf(PropTypes.array),
};

App.defaultProps = {
  books: null,
};
export default App;
