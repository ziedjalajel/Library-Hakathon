const ADD_BOOK = "ADD_BOOK";

export const addbook = (newBook) => {
  return {
    type: ADD_BOOK,
    payload: { newBook },
  };
};
