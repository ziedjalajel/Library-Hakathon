export const ADD_BOOK = "ADD_BOOK";
export const UPDATE_BOOK = "UPDATE_BOOK";
export const ADD_MEMBER = "ADD_MEMBER";
export const UPDATE_MEMBER = "UPDATE_MEMBER";

export const addBook = (newBook) => {
  return {
    type: ADD_BOOK,
    payload: { newBook },
  };
};
export const updateBook = (updatedBook) => {
  return {
    type: UPDATE_BOOK,
    payload: { updatedBook },
  };
};
export const addMember = (newMember) => {
  return {
    type: ADD_MEMBER,
    payload: { newMember },
  };
};
export const updateMember = (updatedMember) => {
  return {
    type: UPDATE_MEMBER,
    payload: { updatedMember },
  };
};
