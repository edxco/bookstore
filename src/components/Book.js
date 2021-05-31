import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <div className="columns">
    <div className="column">
      <div>
        <p>{book.category}</p>
        <h1>{book.title}</h1>
        <p>{book.author}</p>
      </div>
      <div className="is-flex">
        <a href="#!">Comments</a>
        <div>|</div>
        <a href="#!" onClick={() => handleRemoveBook(book)}>Remove</a>
        <div>|</div>
        <a href="#!">Edit</a>
      </div>
    </div>
    <div className="column">
      percent
    </div>
    <div className="column">
      <p>Current Chapter</p>
      <h1>
        Chapter
        {' '}
        {book.chapter}
      </h1>
      <button className="button is-info" type="button">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.objectOf(Object).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
