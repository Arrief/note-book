import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/ContextProvider";
import SearchField from "./SearchField";

const Bookshelf = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  // state to keep track of user input in the search field
  const [searchValue, setSearchValue] = useState("");

  const updateSearchValue = (event) => setSearchValue(event.target.value);
  // function to filter display according to user search input
  const compareInputToBookTitle = (book) =>
    book.title.toLowerCase().includes(searchValue.toLowerCase());

  return (
    <>
      <SearchField action={updateSearchValue} value={searchValue} />
      <section className="bookshelf">
        {/* display all books by default or apply filter from user search */}
        {context.myBooks.filter(compareInputToBookTitle).map((book, index) => (
          <div className="book" key={index}>
            <p className="book-label">
              <span style={{ fontWeight: "bold" }}>{book.title}</span> <br />
              by <br />
              {book.author}
            </p>
            <button
              className="book-btn"
              onClick={() => navigate(`/my-books/${book.id}`)}
            >
              Details
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Bookshelf;
