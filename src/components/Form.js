import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { addBook, updateBook, updateMember } from "../store/actions";
import { Switch } from "react-router";
import { useSelector } from "react-redux";
import members from "../members";

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
      available: "",
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
          <label>Author</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Author Name"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label>Title</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter book title "
            value={book.title}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label>Genre</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Book Genre "
            name="genre"
            value={book.genre}
            onChange={(event) =>
              setBook({
                ...book,
                [event.target.name]: event.target.value
                  .split(",")
                  .map((a) => a),
              })
            }
          />
        </div>
        <div class="form-group">
          <label>Image</label>
          <input
            type="text"
            class="form-control"
            placeholder="Add Book URL "
            value={book.image}
            name="image"
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label>Borrowed By</label>
          <input
            type="text"
            class="form-control"
            placeholder="Add Borrowed By "
            value={book.borrowedBy}
            name="borrowedBy"
            onChange={(event) =>
              setBook({
                ...book,
                [event.target.name]: event.target.value
                  .split(",")
                  .map((a) => a),
              })
            }
          />
        </div>
        <button className="btn btn-primary">
          {!foundBook ? "Add" : "Edit"}
        </button>{" "}
      </form>{" "}
    </Switch>
  );
};

export default CreateForm;
