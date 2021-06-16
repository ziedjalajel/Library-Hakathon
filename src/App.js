import React, { useState } from "react";
import { Head, GlobalStyle } from "./styles";
import BookList from "./components/BookList";
import { Switch, Route } from "react-router";
import Home from "./components/Home";
import "./App.css";
import BookDetail from "./components/BookDetail";
import NavBar from "./components/NavBar";

function App() {

  return (<div>   
    
      <NavBar />
      <Head>
        <Switch>
          <Route
            path={["/books/CreateForm/", "/books/:bookSlug/edit/"]}
          >
          </Route>

          <Route exact path="/books/:bookSlug">
            <BookDetail />
          </Route>

          <Route exact path="/books">
            <BookList />
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
