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

  const handleBookDetails = (event, category) => {
    setNewBook({
      ...newBook,
      [category]: event.currentTarget.value,
    });
  };

  // state for JWT after successful login
  const [token, setToken] = useState("");

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
        handleBookDetails,
        token,
        setToken,
        handleInput,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
