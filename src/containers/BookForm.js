import React from 'react';

const booksCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const BookForm = () => (
  <div>
    <form>
      <label htmlFor="title">
        Title
        <input id="title" name="title" type="text" />
      </label>
      <label htmlFor="options">
        Title
        <select name="options" id="options">
          {booksCategories.map((category) => (
            <option key={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="New book" />
    </form>
  </div>
);

export default BookForm;
