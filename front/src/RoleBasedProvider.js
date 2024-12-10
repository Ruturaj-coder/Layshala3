import React from "react";
import { AdminUserProvider } from "./pages/Adminpages/AdminUserContext";
import { StudentUserProvider } from "./pages/Studentpages/StudentUserContext";
import { useLocation } from "react-router-dom";

const RoleBasedProvider = ({ children }) => {
  const location = useLocation();

  // Decide provider based on route or role
  if (location.pathname.startsWith("/login/admin")) {
    return <AdminUserProvider>{children}</AdminUserProvider>;
  }
  return <StudentUserProvider>{children}</StudentUserProvider>;
};

export default RoleBasedProvider;
