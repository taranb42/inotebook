import { createContext } from "react";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
export const HomeContextAPI = createContext();

export const HomeContext = (props) => {
  const host = process.env.ADMIN;
  const Backend = "http://localhost:3002/";

  let token = Cookies.get("usertoken");
console.log("Hello");
console.log(host);


  const CreateAccount = async ( firstname, lastname, email, password) => {
    //  API CALL
    const response = await fetch(`${Backend}api/auth/createuser`, {
      method: "POST",
      headers: {
        Accept: "multipart/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname, lastname, email, password}),
    });
    const dataresponse = await response.json();

    return dataresponse;
  };

  const login = async ( email, password ) => {
    //  API CALL
    const response = await fetch(`${Backend}api/auth/login`, {
      method: "POST",
      headers: {
        Accept: "multipart/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const dataresponse = await response.json();

    return dataresponse;
  };

  const addnote = async ( title, description, tag  ) => {
    //  API CALL
    const response = await fetch(`${Backend}api/notes/addnote`, {
      method: "POST",
      headers: {
        Accept: "multipart/form-data",
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMzcwY2NiYjMyNmMwYWRmNTk2MzlmIn0sImlhdCI6MTY5MTU3ODU3Mn0.OLekWPxkQBN8snCTz3uabbyTIU19sOLEXAvK1XHMNuw",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const dataresponse = await response.json();

    return dataresponse;
  };


  return (
    <>
      <HomeContextAPI.Provider
        value={{
          CreateAccount,

          login,
          addnote,
        }}
      >
        {props.children}
      </HomeContextAPI.Provider>
    </>
  );
};
