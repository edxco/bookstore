import React from 'react';
import PropTypes from 'prop-types';
import { booksCategories } from '../containers/BookForm';

const CategoryFilter = ({ selection }) => (
  <div>
    <select name="category" id="filterCategory">
      {console.log(booksCategories)}
      <option value="" disabled>
        Filter Category
      </option>
      {['All', ...booksCategories].map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  </div>
);
CategoryFilter.propTypes = {
  selection: PropTypes.func.isRequired,
};
export default CategoryFilter;
