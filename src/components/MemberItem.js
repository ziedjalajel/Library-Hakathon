import { Flxii, Logo ,ThemeButton} from "../styles";
import { Link } from "react-router-dom";
const MemberItem = (props) => {
  const member = props.member;
  return (
    <Flxii>
      <div>
        <Link to={`/members/${member.Slug}`}>
          <ThemeButton>Profile</ThemeButton>
        </Link>
        <p>{member.firstName}</p> 
        <p>{member.lastName}</p>
        
        <p>{member.currentlyBorrowedBooks}</p>
        <p>{member.membership}</p>

        <Logo to={`/members/${member.Slug}/edit`}>edit</Logo>
      </div>
    </Flxii>
  );
};

export default MemberItem;
