import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { MyContext } from "../context/ContextProvider";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);

  // function for logging user out
  const handleLogout = () => {
    localStorage.removeItem("token");
    context.setUserData(context.emptyData);
    navigate("/login");
  };

  return (
    <nav id="navbar">
      <section id="nav-title" onClick={() => navigate("/")}>
        <img src={logo} alt="Note Book logo" id="nav-logo" />
        <p>Note Book</p>
      </section>
      <section id="nav-buttons">
        {!context.userData.userId ? (
          <>
            <button
              className="better-btn"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
            <button className="better-btn" onClick={() => navigate("/login")}>
              Login
            </button>{" "}
          </>
        ) : (
          <>
            <p>Hi, {context.userData.userName}!</p>{" "}
            <button className="better-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
