import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <div className="my-4">
    <div className="columns my-4 box">
      <div className="column">
        <div>
          <p className="is-size-7 has-text-weight-bold has-text-grey">
            {book.category}
          </p>
          <h1 className="is-size-5 has-text-weight-bold has-text-black is-family-monospace">
            {book.title}
          </h1>
          <p className="is-size-7 has-text-weight-light has-text-info">
            {book.author}
          </p>
        </div>
        <div className="is-flex is-size-7 my-3">
          <a href="#!" className="has-text-info">
            Comments
          </a>
          <div className="mx-2 has-text-grey-light">|</div>
          <a href="#!" className="has-text-info" onClick={() => handleRemoveBook(book)}>
            Remove
          </a>
          <div className="mx-2 has-text-grey-light">|</div>
          <a href="#!" className="has-text-info">
            Edit
          </a>
        </div>
      </div>
      <div className="column has-text-weight-light has-text-grey">
        Completed
      </div>
      <div className="column is-family-monospace">
        <p className="is-size-6 has-text-weight-light has-text-grey is-uppercase">
          Current Chapter
        </p>
        <h1 className="mb-2">
          Chapter
          {book.chapter}
        </h1>
        <button className="button is-info is-small px-5" type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.objectOf(Object).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
