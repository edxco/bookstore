import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BooksList from './BookList';
import BooksForm from './BooksForm';

const App = ({ books }) => (
  <div>
    <BooksList books={books} />
    <BooksForm />
  </div>
);

const mapStateToProps = (state) => ({ books: state.bookReducer });

App.propTypes = {
  books: PropTypes.objectOf(PropTypes.object),
};

App.defaultProps = {
  books: null,
};
export default connect(mapStateToProps)(App);
