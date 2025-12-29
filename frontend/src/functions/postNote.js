import axios from "axios";

// axios post request to insert a new note into the database
const postNote = (context, navigate, bookId) =>
  axios({
    method: "post",
    url: `${import.meta.env.VITE_APP_BACKEND_URL}/user/books/notes`,
    data: {
      bookId,
      newNote: context.noteDetails,
    },
  })
    .then((response) => {
      if (response.status === 201) {
        context.setNoteDetails({ content: "", page: "", link: "", type: "" });
        // notification for the user
        alert("You added a new note for this book!");
      }
    })
    .catch((error) => {
      console.error(error);
      context.setNoteDetails({ content: "", page: "", link: "", type: "" });
      navigate("/error");
    });

export default postNote;
