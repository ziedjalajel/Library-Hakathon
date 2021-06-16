import BookItem from "./BookItem";
import { Flxii, Logo, Row } from "../styles";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Route } from "react-router";
import { useSelector } from "react-redux";

const BookList = (props) => {
  const [query, setQuery] = useState("");
  const books = useSelector((state) => state.books);

  let booklistOne = books
    .filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))
    .map((book) => <BookItem book={book} key={book.id} />);

  return (
    <Flxii>
      <Route exact path="/books">
        {" "}
      </Route>

      <Logo to="books/CreateForm">Add</Logo>

      <SearchBar setQuery={setQuery} />
      <Row>{booklistOne}</Row>
    </Flxii>
  );
};
export default BookList;
