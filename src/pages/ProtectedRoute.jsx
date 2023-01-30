import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return children;
      // return <div>Protected route</div>;
  }
};

export default ProtectedRoute;
