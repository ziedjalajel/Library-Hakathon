import { Flxii, Logo, BookPic } from "../styles";
import { Link } from "react-router-dom";
const BookItem = (props) => {
  const book = props.book;
  return (
    <Flxii>
      <div>
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
