import "./bookshelf.css";
import "./modal.css";
import { MyContext } from "../context/ContextProvider";
import { useContext, useRef } from "react";
import postNewBook from "../functions/postNewBook";
import bookCollection from "../assets/book-collection.jpeg";
import { useNavigate } from "react-router-dom";

const AddBookModal = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const dialogRef = useRef(null);

  const handleOpen = () => {
    dialogRef.current?.showModal();
  }

  const handleClose = () => {
    dialogRef.current?.close();
  }

  // post a new book to the backend & database, then update the display by triggering useEffect in MyBooks.jsx
  const handleNewBook = async (event) => {
    event.preventDefault();
    postNewBook(context, navigate);
    context.setReload(!context.reload);
    handleClose();
  };

  return (
    <div>
      <button onClick={handleOpen} className="add-btn">
        Add a book!
      </button>

      <dialog ref={dialogRef} className="dialog-modal">
        <div
          className="modal-content"
          style={{ backgroundImage: `url(${bookCollection})` }}
        >
          <button 
            className="close-button" 
            aria-label="Close modal"
            onClick={handleClose}
          >
            x
          </button>

          <form className="new-book" onSubmit={handleNewBook}>
            <input
              type="text"
              placeholder="Book title..."
              id="title"
              name="title"
              value={context.newBook.title}
              onChange={(e) => context.handleBookData(e, "title")}
              required
            />
            <input
              type="text"
              placeholder="Author..."
              id="author"
              name="author"
              value={context.newBook.author}
              onChange={(e) => context.handleBookData(e, "author")}
              required
            />
            <input
              type="text"
              placeholder="Category..."
              id="category"
              name="category"
              value={context.newBook.category}
              onChange={(e) => context.handleBookData(e, "category")}
            />
            <button type="submit">Submit book</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AddBookModal;

