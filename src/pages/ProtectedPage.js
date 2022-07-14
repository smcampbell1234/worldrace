import React from "react";
import { Navigate } from "react-router-dom";
import {useUserContext} from "../context/user_context";

const ProtectedRoute= ({ children}) => {
  const {myUser} = useUserContext();
  if (!myUser) {
    return <Navigate to="/login" />
  }
  return children;
}
export default ProtectedRoute;