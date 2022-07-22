import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../context/ContextProvider";
import getNotes from "../functions/getNotes";
import "./pages.css";
import "../components/bookshelf.css";
import AddNoteModal from "../components/NoteModal";

const BookDetails = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const { id } = useParams();
  /* getting the book specified by id from context.MyBooks, we only need 1 book => filter array[0];
  also: id from params is a String, needs to be converted into number */
  const myBook = context.myBooks.filter((book) => book.id === Number(id))[0];

  useEffect(() => {
    getNotes(context, navigate, id);
    context.setNotesLoaded(true);
  }, [context.reload]);

  return (
    <section className="main-container">
      <p>
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>
          {myBook.title}
        </span>
        <br />
        {myBook.author}
        <br />({myBook.category})
      </p>
      <ul>
        {context.notesLoaded &&
          context.myNotes.map((note, index) => (
            <div className="note" key={index}>
              <p>"{note.content}"</p>
              <p>page: {note.page}</p>
              {note.link && (
                <p>
                  link: <a href={note.link}>{note.link}</a>
                </p>
              )}
              <p>category: {note.type}</p>
            </div>
          ))}
      </ul>
      <AddNoteModal bookId={id} />
    </section>
  );
};

export default BookDetails;
