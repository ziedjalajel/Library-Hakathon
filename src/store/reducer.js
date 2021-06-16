import slugify from "slugify";
import booksData from "../books";
import { ADD_BOOK, UPDATE_BOOK } from "./actions";

const initialState = {
  books: booksData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      const { newBook } = action.payload;
      newBook.id = state.books[state.books.length - 1].id + 1;
      newBook.Slug = slugify(newBook.title);

      return {
        ...state,
        books: [...state.books, newBook],
      };
    case UPDATE_BOOK:
      const { updatedBook } = action.payload;
      updatedBook.Slug = slugify(updatedBook.title);
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === updatedBook.id ? updatedBook : book
        ),
      };

    default:
      return state;
  }
};

export default reducer;
