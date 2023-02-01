import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/ContextProvider";
// axios post request to backend login route
import postLogin from "../functions/postLogin";
import MyBooks from "./MyBooks";
import "./form.css";

const Login = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    postLogin(context, navigate);
  };

  return (
    <>
      {!context.token ? (
        <form className="main-container" onSubmit={handleLogin}>
          <label htmlFor="loginEmail">Email</label>
          <input
            type="email"
            id="login-email"
            name="email"
            placeholder="Your email..."
            value={context.userData.email}
            onChange={(e) => context.handleInput(e, "email")}
            required
          />
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            name="password"
            placeholder="Your password..."
            value={context.userData.password}
            onChange={(e) => context.handleInput(e, "password")}
            required
          />
          <button className="better-btn">Log in</button>
        </form>
      ) : (
        // redirect the user to his book collection if he is already logged in
        <MyBooks />
      )}
    </>
  );
};

export default Login;
