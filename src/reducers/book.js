const bookReducer = (booksList = [], action) => {
  if (action.type === 'CREATE_BOOK') {
    return [...booksList, action.payload];
  } if (action.type === 'DELETE_BOOK') {
    return booksList.filter((title) => title !== action.payload.title);
  }
  return booksList;
};
export default bookReducer;
