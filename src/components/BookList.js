import React from 'react';
import PropTypes from 'prop-types';

const BooksList = ({ books }) => (

  <table>

    <tr>
      <th>Book Id</th>
      <th>Title</th>
      <th>Category</th>
    </tr>

    {books.map((book) => (

      <tr key={book.id + 2}>
        <td key={book.id}>{book.id}</td>
        <td key={book.title}>{book.title}</td>
        <td key={book.category}>{book.category}</td>
      </tr>

    ))}

    <tbody />
  </table>
);

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default BooksList;
