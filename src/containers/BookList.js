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
      <nav className="navbar px-6">
        <div className="navbar-brand">
          <a className="navbar-item has-text-info has-text-weight-bold is-size-4" href="/">
            BOOKSTORE CMS
          </a>
        </div>
        <div className="navbar-menu is-active">
          <div className="navbar-start">
            <div className="navbar-item">
              <a href="#!">Books</a>
            </div>
            <div className="navbar-item">
              <div className="select">
                <CategoryFilter selection={handleFilterChange} />
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <a href="#!" className="icon has-text-info is-large">
                <i className="fas fa-2x fa-user-circle" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container card has-background-light">
        {selectedCategory().map((book) => (
          <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
        ))}
      </div>
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
