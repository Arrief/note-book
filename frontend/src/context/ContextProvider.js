import React, { useState } from "react";

export const MyContext = React.createContext();

const ContextProvider = (props) => {
  // empty template to reset userData state values
  const emptyData = {
    userName: "",
    email: "",
    password: "",
  };

  // state for storing user data during registration
  const [userData, setUserData] = useState(emptyData);

  // state for storing book collection of user
  const [myBooks, setMyBooks] = useState({});

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
        myBooks,
        setMyBooks,
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
