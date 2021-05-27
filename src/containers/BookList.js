import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BooksList = ({ books }) => (

  <table>

    <thead>
      <tr>
        <th>Book Id</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.bookReducer.map((book) => (

        <tr key={book.id + 2}>
          <td key={book.id}>{book.id}</td>
          <td key={book.title}>{book.title}</td>
          <td key={book.category}>{book.category}</td>
        </tr>

      ))}
    </tbody>

    <tbody />
  </table>
);

const mapStateToProps = (state) => ({ books: state });

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default connect(mapStateToProps)(BooksList);
