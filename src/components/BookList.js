import BookItem from "./BookItem";
import MemberItem from "./MemberItem";
import { Flxii, Logo, Row, BookListStyle, MarginBottom } from "../styles";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Route } from "react-router";
import { useSelector } from "react-redux";

const BookList = (props) => {
  const [query, setQuery] = useState("");
  const books = useSelector((state) => state.books);
  let booklistOne = books
    .filter(
      (book) =>
        book.available &&
        (book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.genre.find((g) => g.toLowerCase().includes(query.toLowerCase())))
    )
    .map((book) => <BookItem book={book} key={book.id} />);

  let booklistTow = books
    .filter(
      (book) =>
        !book.available &&
        (book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.genre.find((g) => g.toLowerCase().includes(query.toLowerCase())))
    )
    .map((book) => <BookItem book={book} key={book.id} />);
  <MemberItem books={books} />;
  return (
    <>
      <Flxii>
        <table></table>
        <Route exact path="/books">
          {" "}
        </Route>

        <Logo to="books/CreateForm">Add</Logo>

        <SearchBar setQuery={setQuery} />
        <Row>
          <BookListStyle>{booklistOne}</BookListStyle>
        </Row>
      </Flxii>
      <MarginBottom />

      <Flxii>
        <Row>
          <BookListStyle>{booklistTow}</BookListStyle>
        </Row>
      </Flxii>
    </>
  );
};
export default BookList;
