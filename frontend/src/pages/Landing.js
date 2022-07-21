import { useNavigate } from "react-router-dom";
import "./pages.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <section className="main-container">
      <h1>Welcome to Note Book!</h1>
      <h3>The best website</h3>
      <div className="btn-group">
        <button className="better-btn" onClick={() => navigate("/register")}>
          Register
        </button>
        <button className="better-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </section>
  );
};

export default Landing;
