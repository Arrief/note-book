import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../context/ContextProvider";
import getNotes from "../functions/getNotes";
import "./pages.css";
import "../components/bookshelf.css";
import AddNoteModal from "../components/NoteModal";
import SearchField from "../components/SearchField";
import FilterDisplay from "../components/FilterDisplay";

const BookDetails = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const { id } = useParams();
  /* getting the book specified by id from context.MyBooks, we only need 1 book => filter array[0];
  also: id from params is a String, needs to be converted into number */
  const myBook = context.myBooks.filter((book) => book.id === Number(id))[0];

  const [searchValue, setSearchValue] = useState("");
  // list of search filters the user can select
  const filterFor = ["all", "quote", "note"];

  useEffect(() => {
    getNotes(context, navigate, id);
    context.setNotesLoaded(true);
  }, [context.reload]);

  // standardize spelling for the category
  const capitalFirstLetter = (word) =>
    word.charAt(0).toUpperCase() + word.slice(1);

  // change the filter criteria
  const changeSearchFilter = (event) =>
    context.setSearchFilter(event.target.value);

  // map method to render the notes/quotes
  const displayNotesQuotes = (note, index) => (
    <div className="note" key={index}>
      <p>"{note.content}"</p>
      <p>Page: {note.page}</p>
      {note.link && (
        <p>
          link: <a href={note.link}>{note.link}</a>
        </p>
      )}
      <p>Category: {capitalFirstLetter(note.type)}</p>
    </div>
  );

  return (
    <section className="main-container">
      <SearchField
        action={(event) => setSearchValue(event.target.value)}
        value={searchValue}
      />
      {/* dropdown menu with option which category to display */}
      <FilterDisplay
        criteria={filterFor}
        changeSearchFilter={changeSearchFilter}
      />
      <p>
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>
          {myBook.title}
        </span>
        <br />
        {myBook.author}
        <br />({myBook.category})
      </p>
      <ul>
        {context.notesLoaded && context.searchFilter === "all"
          ? // default case, display both notes & quotes
            context.myNotes.map(displayNotesQuotes)
          : // filter for either notes or quotes depending on user's choice
            context.myNotes
              .filter(
                (note) => note.type.toLowerCase() === context.searchFilter
              )
              .map(displayNotesQuotes)}
      </ul>
      <AddNoteModal bookId={id} />
    </section>
  );
};

export default BookDetails;
