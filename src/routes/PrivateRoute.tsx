import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const PrivateRoute = ({ ...rest }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Outlet {...rest} />;
  } else {
    return <Navigate to="login" />;
  }
};
