import { Flxii, Logo, BookPic, AvailableBtn } from "../styles";
import { Link } from "react-router-dom";
import { updateBook } from "../store/actions";
import { useDispatch } from "react-redux";

const BookItem = (props) => {
  const dispatch = useDispatch();
  const book = props.book;

  console.log(book.title);

  return (
    <Flxii>
      <div>
        <AvailableBtn
          onClick={() => {
            dispatch(updateBook(book.id));
          }}
        >
          {book.available ? "available" : "Not Available"}
        </AvailableBtn>
        <Link to={`/books/${book.Slug}`}>
          <BookPic src={book.image} alt={book.title} />
        </Link>
        <p>{book.title}</p>
        <p>{book.author}</p>

        <p>{book.genre}</p>

        <Logo to={`/books/${book.Slug}/edit`}>Edit</Logo>
      </div>
    </Flxii>
  );
};

export default BookItem;
