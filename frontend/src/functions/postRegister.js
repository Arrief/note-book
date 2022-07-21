import axios from "axios";

// axios post request to backend register route
const postRegister = (context, navigate) =>
  axios({
    method: "post",
    url: "http://localhost:5000/user/register",
    data: context.userData,
  })
    .then((response) => {
      if (response.status === 201) {
        context.setUserData(context.emptyData);
      }
      console.log(response);
      // redirecting user to login
      navigate("/login");
    })
    .catch((error) => {
      console.error(error);
    });

export default postRegister;
