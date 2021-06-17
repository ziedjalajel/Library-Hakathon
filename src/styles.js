import { NavLink, Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    color: white;
    
  }
`;
export const SearchBarStyled = styled.input`
  margin-top: 5px;
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
  color: black;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: silver;
  color: white;
`;

export const Click = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: white;
`;

export const DeleteButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: white;
`;

export const Flxii = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 10px;
  color: white;
`;

export const Navig = styled.div`
  background-color: ${(props) => props.theme.backGroundColor};
  display: flex;
  flex-direction: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  padding: 5px;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  img {
    border-radius: 60%;
    width: 80px;
  }
`;

export const Nav = styled(NavLink)`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;

  &.active {
    background-color: rgba(255, 1, 1, 0.9);
  }
  .members {
    align-self: flex-end;
  }
`;

export const ImageSize = styled.img`
  width: 40%;
  height: 40%;
`;

export const Head = styled.head`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const BookPic = styled.img`
  width: 200px;
  height: 300px;
`;

export const Row = styled.div`
  display: flex;
  margin: 10px;
  text-align: center;
  justify-content: space-between;
`;
export const AvailableBtn = styled.button`
  font-family: inherit;
  font-size: smaller;
  background-color: white;
`;
export const BookListStyle = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  margin: 10px;
  text-align: center;
  justify-content: space-between;
`;
export const MarginBottom = styled.div`
  margin-bottom: 350px;
`;
