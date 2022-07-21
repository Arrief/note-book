import { Link } from "react-router-dom";
import "./pages.css";

const ErrorPage = () => (
  <section className="main-container">
    <h1>Sorry, something went wrong... &#128543;</h1>
    <Link to={"/"} className="better-btn" style={{ textDecoration: "none" }}>
      Return to the main page
    </Link>
  </section>
);

export default ErrorPage;
