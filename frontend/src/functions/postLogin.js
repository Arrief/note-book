import axios from "axios";

// axios post request to backend login route
const postLogin = (context, navigate) =>
  axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_URL}/user/login`,
    data: context.userData,
  })
    .then((response) => {
      if (response.status === 200) {
        context.setUserData(context.emptyData);
      }
      console.log(response.data);
      // placing the JSON Web Token from backend into the local storage
      localStorage.setItem("token", response.data.token);
      context.setUserData({
        userId: response.data.userId,
        userName: response.data.userName,
        email: "",
        password: "",
      });
      // redirect user to their profile
      navigate("/my-books");
    })
    .catch((error) => {
      console.error(error);
      context.setUserData(context.emptyData);
      navigate("/error");
    });

export default postLogin;
