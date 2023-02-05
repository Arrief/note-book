import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "./bookshelf.css";
import { MyContext } from "../context/ContextProvider";
import { useContext, useState } from "react";
import notes from "../assets/notes.jpeg";
import { useNavigate } from "react-router-dom";
import postNote from "../functions/postNote";

// MaterialUI custom style for <Box /> component
const style = {
  backgroundImage: `url(${notes})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transform: "translate(-50%, -50%)",
  height: { xs: "90vh", md: "auto" },
  width: { xs: "15rem", md: "40rem" },
  border: "2px solid #000",
  boxShadow: 24,
  p: { xs: 2, md: 10 },
};

// Modal controls
const AddNoteModal = (props) => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // post a new note/quote to the backend & database, then update the display by triggering useEffect in BookDetail.js
  const handleNewNote = async (event) => {
    event.preventDefault();
    postNote(context, navigate, props.bookId);
    context.setReload(!context.reload);
  };

  return (
    <div>
      <button onClick={handleOpen} className="add-btn">
        Take a note
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
            <form className="new-book new-note" onSubmit={handleNewNote}>
              <textarea
                placeholder="Start typing!"
                id="textarea-note"
                name="textarea-note"
                value={context.noteDetails.content}
                onChange={(e) => context.handleNoteDetails(e, "content")}
                required
              />
              <input
                type="number"
                placeholder="Page"
                id="page"
                name="page"
                value={context.noteDetails.page}
                onChange={(e) => context.handleNoteDetails(e, "page")}
              />
              <input
                type="text"
                placeholder="Link"
                id="link"
                name="link"
                value={context.noteDetails.link}
                onChange={(e) => context.handleNoteDetails(e, "link")}
              />
              <input
                type="text"
                placeholder="Note or quote?"
                id="type"
                name="type"
                value={context.noteDetails.type}
                onChange={(e) => context.handleNoteDetails(e, "type")}
              />
              <button>Submit note</button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddNoteModal;
