import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/ContextProvider";

const Bookshelf = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <section className="bookshelf">
      {context.myBooks.map((book, index) => (
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
  );
};

export default Bookshelf;
