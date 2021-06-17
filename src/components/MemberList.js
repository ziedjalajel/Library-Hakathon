import MemberItem from "./MemberItem";
import { Flxii, Logo, Row, BookListStyle } from "../styles";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Route } from "react-router";
import { useSelector } from "react-redux";

const MemberList = (props) => {
  const [query, setQuery] = useState("");
  const members = useSelector((state) => state.members);

  let memberlistOne = members
    .filter(
      (member) =>
        member.firstName.toLowerCase().includes(query.toLowerCase()) ||
        member.lastName.toLowerCase().includes(query.toLowerCase())
    )
    .map((member) => <MemberItem member={member} key={member.id} />);

  return (
    <Flxii>
      <Route exact path="/members" id="container">
        {" "}
      </Route>

      <Logo to="members/CreateForm">Add</Logo>

      <SearchBar setQuery={setQuery} />
      <Row>
        <BookListStyle>{memberlistOne}</BookListStyle>
      </Row>
    </Flxii>
  );
};
export default MemberList;
