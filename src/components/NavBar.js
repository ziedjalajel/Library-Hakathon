import { Logo, Navig, Nav } from "../styles";
import navbarimg from "../booknavbar.png";

const NavBar = (props) => {
  return (
    <Navig>
      <Logo exact to="/">
        <img src={navbarimg} alt="navimg" />
      </Logo>
      <Nav to="/books">Books</Nav>
      <Nav to="/members">Members</Nav>
    </Navig>
  );
};

export default NavBar;
