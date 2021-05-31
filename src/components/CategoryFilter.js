import React from 'react';
import { booksCategories } from '../containers/BookForm';

const CategoryFilter = () => (
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

export default CategoryFilter;
