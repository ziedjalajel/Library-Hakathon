import { Logo, Navig, Nav } from "../styles";

const NavBar = (props) => {
  return (
    <Navig>
      <Logo exact to="/">
        Home
      </Logo>
      <Nav to="/books">books</Nav>
      <Nav to="/members">members</Nav>

    </Navig>
  );
};

export default NavBar;
