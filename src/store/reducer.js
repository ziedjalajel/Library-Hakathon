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
      newBook.available = true;

      newBook.id = state.books[state.books.length - 1].id + 1;
      newBook.Slug = slugify(newBook.title);

      return {
        ...state,
        books: [...state.books, newBook],
      };

    case ADD_MEMBER:
      const { newMember } = action.payload;
      if (newMember.membership === "silver") {
        newMember.currentlyBorrowedBooks =
          newMember.currentlyBorrowedBooks.slice(0, 2);
      }
      if (newMember.membership === "gold") {
        newMember.currentlyBorrowedBooks =
          newMember.currentlyBorrowedBooks.slice(0, 3);
      }
      if (newMember.membership === "platinum") {
        newMember.currentlyBorrowedBooks =
          newMember.currentlyBorrowedBooks.slice(0, 5);
      }
      let newbooks = [...state.books];
      newMember.currentlyBorrowedBooks.forEach((id) =>
        newbooks.map((book) => {
          if (book.id === id) {
            book.available = false;
            book.borrowedBy.push(id);
          }
        })
      );

      // newMember.membership = "silver" ? newMember.currentlyBorrowedBooks.length = 2  :
      // newMember.membership = "gold" ? newMember.currentlyBorrowedBooks.length = 3  :
      // newMember.membership = "platinum" ? newMember.currentlyBorrowedBooks.length = 5  :

      newMember.id = state.members[state.members.length - 1].id + 1;
      newMember.Slug = slugify(newMember.firstName);

      return {
        ...state,
        members: [...state.members, newMember],
        books: newbooks,
      };
    case UPDATE_BOOK:
      const { updatedBook } = action.payload;

      const updatedbooks = state.books.map((book) => {
        if (book.id === action.payload.updatedBook)
          book.available = !book.available;
        return book;
      });

      return {
        ...state,
        books: state.books.map((book) =>
          book.id === updatedBook.id ? updatedBook : book
        ),
      };

    case UPDATE_MEMBER:
      const { updatedMember } = action.payload;
      const oldMember = state.members.find(
        (member) => updatedMember.id === member.id
      );
      if (updatedMember.membership === "silver") {
        updatedMember.currentlyBorrowedBooks =
          updatedMember.currentlyBorrowedBooks.slice(0, 2);
      }
      if (updatedMember.membership === "gold") {
        updatedMember.currentlyBorrowedBooks =
          updatedMember.currentlyBorrowedBooks.slice(0, 3);
      }
      if (updatedMember.membership === "platinum") {
        updatedMember.currentlyBorrowedBooks =
          updatedMember.currentlyBorrowedBooks.slice(0, 5);
      }
      let newbooksOne = [...state.books];
      oldMember.currentlyBorrowedBooks.forEach((id) => {
        newbooksOne = newbooksOne.map((book) => {
          if (book.id === id) {
            book.available = true;
          }
          return book;
        });
      });
      updatedMember.currentlyBorrowedBooks.forEach((id) => {
        newbooksOne = newbooksOne.map((book) => {
          if (book.id === id) {
            book.borrowedBy.push(id);
            book.available = false;
          }
          return book;
        });
      });

      updatedMember.Slug = slugify(updatedMember.firstName);

      return {
        ...state,
        members: state.members.map((member) =>
          member.id === updatedMember.id ? updatedMember : member
        ),
        books: newbooksOne,
      };
    default:
      return state;
  }
};

export default reducer;
