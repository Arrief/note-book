import { useContext } from "react";
import { MyContext } from "../context/ContextProvider";

const Bookshelf = () => {
  const context = useContext(MyContext);

  return (
    <ul>
      {context.myBooks.map((book, index) => (
        <li key={index}>{book.title}</li>
      ))}
    </ul>
  );
};

export default Bookshelf;
