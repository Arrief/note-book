import React, { useState } from "react";

export const MyContext = React.createContext();

const ContextProvider = (props) => {
  // empty template to reset userData state values
  const emptyData = {
    userId: "",
    userName: "",
    email: "",
    password: "",
  };

  // state for storing user data during registration
  const [userData, setUserData] = useState(emptyData);

  // checking if the book collection was successfully loaded from the backend
  const [booksLoaded, setBooksLoaded] = useState(false);

  // state for storing book collection of user
  const [myBooks, setMyBooks] = useState([]);

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    category: "",
  });

  const handleBookData = (event, category) => {
    setNewBook({
      ...newBook,
      [category]: event.currentTarget.value,
    });
  };

  const [noteDetails, setNoteDetails] = useState({
    content: "",
    page: "",
    link: "",
    type: "",
  });

  const handleNoteDetails = (event, category) => {
    setNoteDetails({
      ...newBook,
      [category]: event.currentTarget.value,
    });
  };

  // state for JWT after successful login
  const [token, setToken] = useState("");

  // state to trigger useEffect after updating the database
  const [reload, setReload] = useState(false);

  // function to assign the user data from input fields to userData's properties
  const handleInput = (event, category) => {
    setUserData({
      ...userData,
      [category]: event.currentTarget.value,
    });
  };

  return (
    <MyContext.Provider
      value={{
        emptyData,
        userData,
        setUserData,
        booksLoaded,
        setBooksLoaded,
        myBooks,
        setMyBooks,
        newBook,
        setNewBook,
        handleBookData,
        noteDetails,
        setNoteDetails,
        handleNoteDetails,
        token,
        setToken,
        reload,
        setReload,
        handleInput,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
