import { Flxii, Logo, PhonePic } from "../styles";
import { Link } from "react-router-dom";
const BookItem = (props) => {
  const book = props.book;
  return (
    <Flxii>
      <div>
        <Link to={`/books/${book.Slug}`}>
        </Link>

        <p>{book.author}</p>

        <p>{book.title}</p>
    
        <p>{book.genre}</p>

        <Logo to={`/books/${book.Slug}/edit`}>edit</Logo>
      </div>
    </Flxii>
  );
};

export default BookItem;
