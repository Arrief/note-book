import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/ContextProvider";
import getNotes from "../functions/getNotes";
import "./pages.css";
import "../components/bookshelf.css";
import AddNoteModal from "../components/NoteModal";

const BookDetails = () => {
  const context = useContext(MyContext);
  const { id } = useParams();
  /* getting the book specified by id from context.MyBooks, we only need 1 book => filter array[0];
  also: id from params is a String, needs to be converted into number */
  const myBook = context.myBooks.filter((book) => book.id === Number(id))[0];

  useEffect(() => {
    getNotes(id);
  }, [context.reload]);

  return (
    <section className="main-container">
      <p>
        {myBook.title}
        <br />
        {myBook.author}
        <br />
        {myBook.category}
      </p>
      <AddNoteModal bookId={id} />
    </section>
  );
};

export default BookDetails;
