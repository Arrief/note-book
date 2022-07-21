import axios from "axios";

// axios post request to backend login route
const postLogin = (context, navigate) =>
  axios({
    method: "post",
    url: "http://localhost:5000/user/login",
    data: context.userData,
  })
    .then((response) => {
      if (response.status === 200) {
        context.setUserData(context.emptyData);
      }
      console.log(response);
      // placing the JSON Web Token from backend into the local storage
      localStorage.setItem("token", response.data.token);
      // redirect user to their profile
      navigate("/profile");
    })
    .catch((error) => {
      console.error(error);
    });

export default postLogin;
