import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav id="navbar">
      <section id="nav-title">
        <img
          src={logo}
          alt="Note Book logo"
          id="nav-logo"
          onClick={() => navigate("/")}
        />
        <p>Note Book</p>
      </section>
      <section id="nav-buttons">
        <button className="better-btn" onClick={() => navigate("/register")}>
          Register
        </button>
        <button className="better-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
