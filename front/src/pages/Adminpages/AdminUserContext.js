import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const AdminUserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Username",
    photo: null,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
