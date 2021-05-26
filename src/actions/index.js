export const createBook = (id, title, category) => ({
  type: 'CREATE_BOOK',
  payload: {
    id,
    title,
    category,
  },
});

export const deleteBook = (title) => ({
  type: 'DELETE_BOOK',
  payload: {
    title,
  },
});
