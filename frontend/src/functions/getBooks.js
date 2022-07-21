import axios from "axios";

// axios get request to backend books route
const getBooks = (token, context, navigate) =>
  axios({
    url: "http://localhost:5000/user/books",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        console.log(response.data);
        // destructuring userInfo object from backend to get all properties like firstName etc.
      }
    })
    .catch((error) => {
      console.error(error);
      navigate("/error");
    });
export default getBooks;
