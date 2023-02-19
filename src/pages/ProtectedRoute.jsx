import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

const ProtectedRoute = ({ children }) => {
  const [user] = useContext(UserContext);
  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
