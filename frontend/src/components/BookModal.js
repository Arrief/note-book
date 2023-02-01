import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "./bookshelf.css";
import { MyContext } from "../context/ContextProvider";
import { useContext, useState } from "react";
import postNewBook from "../functions/postNewBook";
import bookCollection from "../assets/book-collection.jpeg";
import { useNavigate } from "react-router-dom";

const style = {
  backgroundImage: `url(${bookCollection})`,
  border: "2px solid #000",
  boxShadow: 24,
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transform: "translate(-50%, -50%)",
  height: { xs: "90vh", md: "auto" },
  width: { xs: "15rem", md: "40rem" },
  p: { xs: 2, md: 10 },
};

const AddBookModal = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNewBook = async (event) => {
    event.preventDefault();
    postNewBook(context, navigate);
    context.setReload(!context.reload);
  };

  return (
    <div>
      <button onClick={handleOpen} className="add-btn">
        Add a book!
      </button>
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
              <button>Submit book</button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddBookModal;
