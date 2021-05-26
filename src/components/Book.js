import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <>
    {book}
  </>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.object),
};

Book.defaultProps = {
  book: null,
};

/// dudas con la 16
