import React, { useState, createContext } from "react";

export const AuthContext = createContext();

function BreedContext({ children }) {
  const [selectBreed, setSelectBreed] = useState("");
  const [selectBreedIndex, setSelectBreedIndex] = useState("");
  return (
  
      <AuthContext.Provider
        value={{
          selectBreed,
          setSelectBreed,
          selectBreedIndex,
          setSelectBreedIndex,
        }}
      >
        {children}
      </AuthContext.Provider>

  );
}

export default BreedContext;
