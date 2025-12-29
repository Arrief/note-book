import axios from "axios";

// axios post request to insert a new book into the database
const postNewBook = (context, navigate) =>
  axios({
    method: "post",
    url: `${import.meta.env.VITE_APP_BACKEND_URL}/user/books`,
    data: { book: context.newBook, userId: context.userData.userId },
  })
    .then((response) => {
      if (response.status === 201) {
        context.setNewBook({ title: "", author: "", category: "" });
        // notification for the user
        alert("You added a new book to your collection!");
      }
    })
    .catch((error) => {
      console.error(error);
      context.setNewBook({ title: "", author: "", category: "" });
      navigate("/error");
    });

export default postNewBook;
