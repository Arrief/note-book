import "./bookshelf.css";
import "./modal.css";
import { MyContext } from "../context/ContextProvider";
import { useContext, useRef } from "react";
import notes from "../assets/notes.jpeg";
import { useNavigate } from "react-router-dom";
import postNote from "../functions/postNote";

const AddNoteModal = (props) => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const dialogRef = useRef(null);

  const handleOpen = () => {
    dialogRef.current?.showModal();
  }

  const handleClose = () => {
    dialogRef.current?.close();
  }

  // post a new note/quote to the backend & database, then update the display by triggering useEffect in BookDetail.js
  const handleNewNote = async (event) => {
    event.preventDefault();
    postNote(context, navigate, props.bookId);
    context.setReload(!context.reload);
    handleClose();
  };

  return (
    <div>
      <button onClick={handleOpen} className="add-btn">
        Take a note
      </button>

      <dialog ref={dialogRef} className="dialog-modal">
        <div
          className="modal-content note-dialog"
          style={{ backgroundImage: `url(${notes})` }}
        >
          <button
            className="close-button"
            aria-label="Close modal"
            onClick={handleClose}
          >
            x
          </button>

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
        </div>
      </dialog>
    </div>
  );
};

export default AddNoteModal;
