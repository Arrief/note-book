import axios from "axios";
import Alert from "@mui/material/Alert";

const postNote = (context, navigate, bookId) =>
  axios({
    method: "post",
    url: "http://localhost:5000/user/books/notes",
    data: {
      bookId,
      newNote: {
        content: context.noteDetails.content,
        page: context.noteDetails.page,
        link: context.noteDetails.link,
        type: context.noteDetails.type,
      },
    },
  })
    .then((response) => {
      if (response.status === 201) {
        context.setNoteDetails({ content: "", page: "", link: "", type: "" });
        // notification for the user
        <Alert onClose={() => {}} severity="success">
          "You added a new note for this book!
        </Alert>;
      }
    })
    .catch((error) => {
      console.error(error);
      context.setNoteDetails({ content: "", page: "", link: "", type: "" });
      navigate("/error");
    });

export default postNote;
