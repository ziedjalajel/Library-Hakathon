
import { Redirect, useParams } from "react-router";
import { Link } from "react-router-dom";
import {Flxii, Logo} from "../styles"
import { useSelector } from "react-redux";


const MemberDetail  = (props)=> {
  const members = useSelector((state) => state.members);
  const books = useSelector((state) => state.books);

  const  memberSlug  = useParams().memberSlug


  const member =members.find((member) => member.Slug === memberSlug);
  const borrowedMembers = member.currentlyBorrowedBooks;
  const memberNametwo = borrowedMembers.map((book) =>
    books.find((m) => m.id === book)
  );
  const memberNameOne = memberNametwo.map((book)=><p> {book.title}</p>)

if(!member) return <Redirect to ="/"/>

 return (
        <div><Flxii>
  <Link to={`/members/${member.Slug}`}>
      </Link>
      
      {member.firstName}
        <p>{member.lastName}</p> 

         {member.currentlyBorrowedBooks}
         <p>{member.membership}</p>      
         <p>{memberNameOne}</p>      

        
        <Logo to = "/members">Go Back </Logo>
</Flxii>
          </div>);



  };
  
export default MemberDetail;

