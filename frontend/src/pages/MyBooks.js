import { useCallback, useContext, useEffect } from "react";
import { MyContext } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import getBooks from "../functions/getBooks";
import Bookshelf from "../components/Bookshelf";
import AddBookModal from "../components/Modal";

const MyBooks = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const userName = context.userData.userName;
  const token = localStorage.getItem("token");
  useEffect(() => {
    getBooks(token, context, navigate);
    context.setBooksLoaded(true);
  }, []);
  // get all of the user's books from the backend & store them in context
  // const memoizedBooks = useCallback(() => getBooks(context), [context.token]);
  // useEffect(() => memoizedBooks());

  return (
    <section className="main-container">
      {/* <h1>{context.userName}'s bookshelf:</h1>
      {!context.MyBooks ? (
        <h3>You have no books yet...</h3>
      ) : (
        <div>{context.booksLoaded ? <h1>Hi</h1> : <p>Loading books...</p>}</div>
      )} */}
      <>
        {context.booksLoaded ? (
          <>
            <h1>{userName}'s bookshelf:</h1>
            {context.myBooks.length > 0 ? (
              <Bookshelf />
            ) : (
              <h3>You have no books yet...</h3>
            )}
            <AddBookModal />
          </>
        ) : (
          <p>Loading data...</p>
        )}
      </>
    </section>
  );
};

export default MyBooks;
