import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav id="navbar">
      <img
        src=""
        alt="Note Book logo"
        id="nav-logo"
        onClick={() => navigate("/")}
      />
      <section id="nav-buttons">
        <button onClick={() => navigate("/register")}>Register</button>
        <button onClick={() => navigate("/login")}>Login</button>
      </section>
    </nav>
  );
};

export default Navbar;
