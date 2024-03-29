import axios from "axios";
import Alert from "@mui/material/Alert";

// axios post request to insert a new book into the database
const postNewBook = (context, navigate) =>
  axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_URL}/user/books`,
    data: { book: context.newBook, userId: context.userData.userId },
  })
    .then((response) => {
      if (response.status === 201) {
        context.setNewBook({ title: "", author: "", category: "" });
        // notification for the user

        <Alert onClose={() => {}} severity="success">
          {alert("You added a new book to your collection!")}
        </Alert>;
      }
    })
    .catch((error) => {
      console.error(error);
      context.setNewBook({ title: "", author: "", category: "" });
      navigate("/error");
    });

export default postNewBook;
