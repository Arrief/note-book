import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "./bookshelf.css";
import { MyContext } from "../context/ContextProvider";
import { useContext, useState } from "react";
import postNewBook from "../functions/postNewBook";
import bookCollection from "../assets/book-collection.jpeg";

const style = {
  backgroundImage: `url(${bookCollection})`,
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transform: "translate(-50%, -50%)",
  width: "40rem",
  border: "2px solid #000",
  boxShadow: 24,
  p: 10,
};

const AddBookModal = () => {
  const context = useContext(MyContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNewBook = (event) => {
    event.preventDefault();
    postNewBook();
  };

  return (
    <div>
      <button onClick={handleOpen}>Add a book!</button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form className="new-book" onSubmit={handleNewBook}>
              <input
                type="text"
                placeholder="Book title..."
                id="title"
                name="title"
                value={context.newBook.title}
                onChange={(e) => context.handleBookDetails(e, "title")}
                required
              />
              <input
                type="text"
                placeholder="Author..."
                id="author"
                name="author"
                value={context.newBook.author}
                onChange={(e) => context.handleBookDetails(e, "author")}
                required
              />
              <input
                type="text"
                placeholder="Category..."
                id="category"
                name="category"
                value={context.newBook.category}
                onChange={(e) => context.handleBookDetails(e, "category")}
              />
              <button>Submit book</button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddBookModal;
