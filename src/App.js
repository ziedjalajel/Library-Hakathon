import { Head } from "./styles";
import BookList from "./components/BookList";
import MemberList from "./components/MemberList";
import { Switch, Route } from "react-router";
import Home from "./components/Home";
import "./App.css";
import BookDetail from "./components/BookDetail";
import MemberDetail from "./components/MemberDetail";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import MemberForm from "./components/MemberForm";

function App() {
  return (
    <div>
      <NavBar />
      <Head>
        <Switch>
          <Route path={["/books/CreateForm/", "/books/:bookSlug/edit"]}>
            <Form />
          </Route>
          <Route path={["/members/CreateForm/", "/members/:memberSlug/edit"]}>
            <MemberForm />
          </Route>

          <Route exact path="/books/:bookSlug">
            <BookDetail />
          </Route>

          <Route exact path="/members/:memberSlug">
            <MemberDetail />
          </Route>
         

          <Route exact path="/books">
            <BookList />
          </Route>
          <Route exact path="/members">
            <MemberList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Head>
    </div>
  );
}

export default App;
