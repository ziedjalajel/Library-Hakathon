import { Flxii, Logo, ThemeButton, AvailableBtn } from "../styles";
import { Link } from "react-router-dom";
const MemberItem = (props) => {
  const member = props.member;
  const books = props.books;

  return (
    <Flxii>
      <div>
        <Link to={`/members/${member.Slug}`}>
          <AvailableBtn>Profile</AvailableBtn>
        </Link>
        <p>{member.firstName}</p>
        <p>{member.lastName}</p>
        <p>{member.membership}</p>

        <Logo to={`/members/${member.Slug}/update`}>update</Logo>
      </div>
    </Flxii>
  );
};

export default MemberItem;
