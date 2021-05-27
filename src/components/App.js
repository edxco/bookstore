import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BooksList from './BookList';
import BooksForm from './BooksForm';

const App = ({ books }) => {
  console.log(books);
  return (
    <div>
      <BooksList books={books} />
      <BooksForm />
    </div>
  );
};

const mapStateToProps = (state) => ({ books: state.bookReducer });

App.propTypes = {
  books: PropTypes.objectOf(PropTypes.object).isRequired,
};

// App.defaultProps = {
//   books: null,
// };
export default connect(mapStateToProps)(App);
