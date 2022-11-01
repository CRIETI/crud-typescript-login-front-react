import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Loading } from "../components/Loading";

export const PrivateRoute = ({ ...rest }) => {
  const { user, getLogged, loading } = useContext(AuthContext);

  useEffect(() => {
    if (user) return;

    getLogged();
  }, [getLogged, user]);
  if (loading) {
    return <Loading />;
  } else if (user) {
    return <Outlet {...rest} />;
  } else {
    return <Navigate to="login" />;
  }
};
