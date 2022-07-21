import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/ContextProvider";
// axios post request to backend register route
import postRegister from "../functions/postRegister";
import MyBooks from "./MyBooks";
import "./reglog.css";

const Register = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    postRegister(context, navigate);
  };

  return (
    <>
      {!context.token ? (
        <form className="main-container" onSubmit={handleRegister}>
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Your username..."
            value={context.userData.userName}
            onChange={(e) => context.handleInput(e, "userName")}
            required
          />
          <label for="register-email">Email</label>
          <input
            type="email"
            id="register-email"
            name="email"
            placeholder="Your email..."
            value={context.userData.email}
            onChange={(e) => context.handleInput(e, "email")}
            required
          />
          <label for="register-password">Email</label>
          <input
            type="password"
            id="register-password"
            name="Password"
            placeholder="Password"
            value={context.userData.password}
            onChange={(e) => context.handleInput(e, "password")}
            required
          />
          <button className="better-btn">Register</button>
        </form>
      ) : (
        // redirect the user to his book collection if he is already logged in
        <MyBooks />
      )}
    </>
  );
};

export default Register;
