
import { Redirect, useParams } from "react-router";
import { Link } from "react-router-dom";
import {Flxii, Logo, PhonePic} from "../styles"
import { useSelector } from "react-redux";


const BookDetail  = (props)=> {
  const books = useSelector((state) => state.books);
  const  bookSlug  = useParams().bookSlug


const book =books.find((book) => book.Slug === bookSlug);
if(!book) return <Redirect to ="/"/>

 return (
        <div><Flxii>
  <Link to={`/books/${book.Slug}`}>
      </Link>
          {book.author}


        <p>
        {book.genre}
        </p>      <p>
          {book.title}
        </p>

        
        <Logo to = "/books">Go Back </Logo>
</Flxii>
          </div>);



  };
  
export default BookDetail;

