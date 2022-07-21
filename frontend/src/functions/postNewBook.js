import axios from "axios";

// axios post request to backend books route
const postNewBook = (context, navigate) =>
  axios({
    method: "post",
    url: "http://localhost:5000/user/books",
    data: { book: context.newBook, userId: context.userData.userId },
  })
    .then((response) => {
      if (response.status === 200) {
        context.setNewBook({ title: "", author: "", category: "" });
      }
      // redirect user to their profile
      navigate("/my-books");
    })
    .catch((error) => {
      console.error(error);
      context.setNewBook({ title: "", author: "", category: "" });
      navigate("/error");
    });

export default postNewBook;
