import { Logo, Navig, Nav, ThemeButton } from "../styles";

const NavBar = (props) => {
  return (
    <Navig>
      <Logo exact to="/">
        Home
      </Logo>
      <Nav to="/books">books</Nav>
    
    </Navig>
  );
};

export default NavBar;
