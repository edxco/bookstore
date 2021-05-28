const bookReducer = (booksList = [], action) => {
  if (action.type === 'CREATE_BOOK') {
    return [...booksList, action.payload];
  } if (action.type === 'DELETE_BOOK') {
    return booksList.filter((book) => {
      console.log(book.id);
      return book.id !== action.payload.id;
    });
  }
  return booksList;
};
export default bookReducer;
