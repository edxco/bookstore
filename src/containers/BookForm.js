import React, { useState } from 'react';
import uniqid from 'uniqid';

const booksCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
// store title and book category
// handle change
// handle submit
const BookForm = () => {
  const [data, setData] = useState({
    id: uniqid.process(),
    title: '',
    category: '',
  });

  const handleChange = ({ target }) => {
    setData((oldData) => ({
      ...oldData, [target.name]: target.value,
    }));
  };

  return (
    <div>
      <form>
        <label htmlFor="title">
          Title
          <input onChange={handleChange} id="title" name="title" type="text" />
        </label>

        <label htmlFor="options">
          Title
          <select onChange={handleChange} name="category" id="options" value={data.category}>
            <option value="" disabled>
              Select Category
            </option>
            {booksCategories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="New book" />
      </form>
    </div>
  );
};

export default BookForm;
