import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return isAdmin ? children : <Navigate to="/404" />;
}

export default ProtectedRoute;
