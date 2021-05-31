import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteBook, changeFilter } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, deleteBook, booksFiltered, changeFilter,
}) => {
  const handleRemoveBook = (book) => {
    deleteBook(book);
  };
  const handleFilterChange = (category) => {
    changeFilter(category);
  };
  const selectedCategory = () => {
    if (books.filtered !== 'All') {
      books.book.map(
        (book) => book.category.toLowerCase() === booksFiltered.toLowerCase(),
      );
      return books.book.filter((book) => book.category === booksFiltered);
    }
    return books.book;
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Book Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedCategory().map((book) => (
            <Book
              key={book.id}
              book={book}
              handleRemoveBook={handleRemoveBook}
            />
          ))}
        </tbody>

        <tbody />
      </table>
      <CategoryFilter selection={handleFilterChange} />
    </>
  );
};

const mapStateToProps = (state) => ({
  books: state,
  booksFiltered: state.filtered,
});

BooksList.propTypes = {
  books: PropTypes.objectOf(Object).isRequired,
  deleteBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  booksFiltered: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, { deleteBook, changeFilter })(
  BooksList,
);
