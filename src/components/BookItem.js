import { Flxii, Logo, BookPic } from "../styles";
import { Link } from "react-router-dom";
import { updateBook } from "../store/actions";
import { useDispatch } from "react-redux";
const BookItem = (props) => {
  const dispatch = useDispatch();
  const book = props.book;


  console.log(book.title)

  return (
    <Flxii>
      <div>

        <button
          onClick={() => {
            dispatch(updateBook(book.id));
          }}
        >
          {book.available ? "available" : "Not Available"}
        </button>
        <Link to={`/books/${book.Slug}`}>
        <BookPic src={book.image} alt={book.title}/>
        </Link>
        <p>{book.title}</p> 
        <p>{book.author}</p>
        
        <p>{book.genre}</p>

        <Logo to={`/books/${book.Slug}/edit`}>edit</Logo>
      </div>
    </Flxii>
  );
};

export default BookItem;
