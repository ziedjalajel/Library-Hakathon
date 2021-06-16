import slugify from "slugify";
import booksData from "../books";
const initialState = {
  books: booksData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_BOOK":
      const { newBook } = action.payload;
      newBook.id = state.books[state.books.length - 1].id + 1;
      newBook.Slug = slugify(newBook.name);

      return {
        ...state,
        books: [...state.books, newBook],
      };
    
    default:
      return state;
  }
};

export default reducer;
