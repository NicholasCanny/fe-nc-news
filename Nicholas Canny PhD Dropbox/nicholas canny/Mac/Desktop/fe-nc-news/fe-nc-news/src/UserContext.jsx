import { createContext, useState } from "react";

export const UserContext = createContext();

export const UseProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState("jessjelly");

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};
