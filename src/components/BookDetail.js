import { Redirect, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Flxii, Logo, BookPic } from "../styles";
import { useSelector } from "react-redux";

const BookDetail = (props) => {
  const books = useSelector((state) => state.books);
  const members = useSelector((state) => state.members);

  const bookSlug = useParams().bookSlug;
  const book = books.find((book) => book.Slug === bookSlug);
  const borrowedMembers = book.borrowedBy;
  const memberName = borrowedMembers.map((member) =>
    members.find((m) => m.id === member)
  );
  const nameOne = memberName.map((member) => (
    <p>
      {" "}
      {members.firstName} {members.lastName}{" "}
    </p>
  ));
  console.log(members.firstName);
  if (!book) return <Redirect to="/" />;

  return (
    <div>
      <Flxii>
        <Link to={`/books/${book.Slug}`}>
          <BookPic src={book.image} alt={book.title} />
        </Link>
        <br />
        <p>Author Name : {book.author}</p>

        <p>Genre :{book.genre}</p>
        <p>Book Title :{book.title}</p>
        <br />

        <p>Borrowed By :{nameOne}</p>

        <Logo to="/books">Go Back </Logo>
      </Flxii>
    </div>
  );
};

export default BookDetail;
