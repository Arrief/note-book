import axios from "axios";

const getNotes = (id) => {
  axios({
    method: "post",
    url: `http://localhost:5000/user/books/${id}`,
  });
};

export default getNotes;
