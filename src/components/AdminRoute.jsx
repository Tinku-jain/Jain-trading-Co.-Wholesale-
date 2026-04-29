import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const adminInfo = JSON.parse(localStorage.getItem("adminInfo"));

  if (!adminInfo || !adminInfo.isAdmin) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
};

export default AdminRoute;