import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/ContextProvider";
import SearchField from "./SearchField";

const Bookshelf = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="bookshelf">
      <SearchField
        action={(event) => setSearchValue(event.currentTarget.value)}
        value={searchValue}
      />
      {context.myBooks.map(
        (book, index) =>
          // filter display according to user search, if any
          book.title.includes(searchValue.toLowerCase()) && (
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
          )
      )}
    </section>
  );
};

export default Bookshelf;
