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

  // state for storing the properties of a new book the user wants to submit
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

  // checking if the book collection was successfully loaded from the backend
  const [notesLoaded, setNotesLoaded] = useState(false);

  // state for storing the properties of a new note the user wants to submit
  const [noteDetails, setNoteDetails] = useState({
    content: "",
    page: "",
    link: "",
    type: "",
  });

  const handleNoteDetails = (event, category) => {
    setNoteDetails({
      ...noteDetails,
      [category]: event.currentTarget.value,
    });
  };

  // state for storing all notes & quotes for a particular book
  const [myNotes, setMyNotes] = useState([]);

  // state to keep track which search filter the user selects
  const [searchFilter, setSearchFilter] = useState("all");

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
        notesLoaded,
        setNotesLoaded,
        noteDetails,
        setNoteDetails,
        handleNoteDetails,
        myNotes,
        setMyNotes,
        searchFilter,
        setSearchFilter,
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
