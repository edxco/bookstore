import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BooksList = ({ books }) => {
  console.log(books);
  return (

    <table>
      <thead>
        <tr>
          <th>Book Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        <tr>
          {books.map((book) => (
            <>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.category}</td>
            </>
          ))}
        </tr>
      </thead>
      <tbody />
    </table>
  );
};
const mapStateToProps = (state) => ({ books: state.books });

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.array).isRequired,
};

// BooksList.defaultProps = {
//   books: null,
// };
export default connect(mapStateToProps)(BooksList);
