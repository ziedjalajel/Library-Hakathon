import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { addBook, updateBook } from "../store/actions";
import { Switch, Route } from "react-router";
import { useSelector } from "react-redux";

const CreateForm = () => {
  const bookSlug = useParams().bookSlug;
  const books = useSelector((state) => state.books);
  const foundBook = books.find((book) => book.Slug === bookSlug);

  const dispatch = useDispatch();
  const history = useHistory();
  const [book, setBook] = useState(
    foundBook ?? {
      author: "",
      title: "",
      genree: "",
      image: "",
    }
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundBook) dispatch(updateBook(book));
    else dispatch(addBook(book));
    history.push("/books");
  };

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };
  return (
    <Switch>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label>author</label>
          <input
            type="text"
            class="form-control"
            placeholder="author"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label>title</label>
          <input
            type="text"
            class="form-control"
            placeholder="enter your book name "
            value={book.title}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label>genre</label>
          <input
            type="text"
            class="form-control"
            placeholder="enter your book genre "
            name="genre"
            value={book.genre}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label>Image</label>
          <input
            type="text"
            class="form-control"
            placeholder="add your book image "
            value={book.image}
            name="image"
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label>available</label>
          <input
            type="text"
            class="form-control"
            placeholder="add your book availablity "
            value={book.available}
            name="available"
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label>borrowedBy</label>
          <input
            type="text"
            class="form-control"
            placeholder="add  borrowedBy "
            value={book.borrowedBy}
            name="borrowedBy"
            onChange={handleChange}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          {CreateForm ? "add" : `edit`}
        </button>
      </form>{" "}
    </Switch>
  );
};

export default CreateForm;
