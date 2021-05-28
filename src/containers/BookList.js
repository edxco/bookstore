import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteBook } from '../actions';

const BooksList = ({ books, deleteBook }) => {
  const handleRemoveBook = (book) => (
    deleteBook(book)
  );
  return (

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
        {books.bookReducer.map((book) => (

          <tr key={book.id + 2}>
            <td key={book.id}>{book.id}</td>
            <td key={book.title}>{book.title}</td>
            <td key={book.category}>{book.category}</td>
            <td>
              <button type="button" onClick={handleRemoveBook}>Remove</button>
            </td>
          </tr>

        ))}
      </tbody>

      <tbody />
    </table>
  );
};

const mapStateToProps = (state) => ({ books: state });

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.array).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { deleteBook })(BooksList);
