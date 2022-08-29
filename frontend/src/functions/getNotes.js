import axios from "axios";

// axios get request for a list of all notes for a specific book
const getNotes = (context, navigate, id) => {
  axios({
    url: `http://localhost:5000/user/books/${id}`,
  })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        context.setMyNotes(response.data);
      }
    })
    .catch((error) => {
      console.error(error);
      navigate("/error");
    });
};

export default getNotes;
