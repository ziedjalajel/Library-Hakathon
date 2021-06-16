
import { Redirect, useParams } from "react-router";
import { Link } from "react-router-dom";
import {Flxii, Logo, BookPic} from "../styles"
import { useSelector } from "react-redux";


const BookDetail  = (props)=> {
  const books = useSelector((state) => state.books);
  const  bookSlug  = useParams().bookSlug


const book =books.find((book) => book.Slug === bookSlug);
if(!book) return <Redirect to ="/"/>

 return (
        <div><Flxii>
  <Link to={`/books/${book.Slug}`}>
  <BookPic src={book.image} alt={book.title}/>
      </Link>
      
           {book.author}
        <p>{book.genre}</p>      
        <p>{book.title}</p>

        
        <Logo to = "/books">Go Back </Logo>
</Flxii>
          </div>);



  };
  
export default BookDetail;

