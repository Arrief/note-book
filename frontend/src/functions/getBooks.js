import axios from "axios";

// axios get request to backend books route to get a list of all of the user's books
const getBooks = (token, context, navigate) =>
  axios({
    url: `${process.env.REACT_APP_BACKEND_URL}/user/books`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        context.setMyBooks(response.data);
      }
    })
    .catch((error) => {
      console.error(error);
      navigate("/error");
    });

export default getBooks;
