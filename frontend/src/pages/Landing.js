import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/ContextProvider";
import MyBooks from "./MyBooks";
import "./pages.css";

const Landing = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <>
      {!context.token ? (
        <section className="main-container">
          <h1>Welcome to Note Book!</h1>
          <h3>
            All of your notes and quotations from your books, in one place.
          </h3>
          <div className="btn-group">
            <button
              className="better-btn"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
            <button className="better-btn" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        </section>
      ) : (
        <MyBooks />
      )}
    </>
  );
};

export default Landing;
