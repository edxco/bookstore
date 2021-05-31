const filterReducer = (option = 'All', action) => {
  switch (action.type) {
    case ('CHANGE_FILTER'):
      return action.payload;
    default:
      return option;
  }
};

export default filterReducer;
