import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/ContextProvider";
import "./pages.css";

const ErrorPage = () => {
  const context = useContext(MyContext);

  return (
    <section className="main-container">
      <h1>Sorry, something went wrong... &#128543;</h1>
      <Link
        to={context.userData.userId ? "/my-books" : "/"}
        className="better-btn"
        style={{ textDecoration: "none" }}
      >
        Return to the main page
      </Link>
    </section>
  );
};

export default ErrorPage;
