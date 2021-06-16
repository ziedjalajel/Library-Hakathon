import slugify from "slugify";
import booksData from "../books";
import membersData from "../members";
import { ADD_BOOK, ADD_MEMBER, UPDATE_BOOK, UPDATE_MEMBER } from "./actions";

const initialState = {
  books: booksData,
  members: membersData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:

      const { newBook } = action.payload;    
      newBook.available = false;

      newBook.id = state.books[state.books.length - 1].id + 1;
      newBook.Slug = slugify(newBook.title);

      return {
        ...state,
        books: [...state.books, newBook],
      }; 

      case ADD_MEMBER:

      const { newMember } = action.payload;    

      newMember.id = state.members[state.members.length - 1].id + 1;
      newMember.Slug = slugify(newMember.firstName);

      return {
        ...state,
        members: [...state.members, newMember],
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


        case UPDATE_MEMBER:
          const { updatedMember } = action.payload;
          updatedMember.Slug = slugify(updatedMember.firstName);
          return {
            ...state,
            members: state.members.map((member) =>
            member.id === updatedMember.id ? updatedMember : member
            ),
          };

    default:
      return state;
  }
};

export default reducer;
