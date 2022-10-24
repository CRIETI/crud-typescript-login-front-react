import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { UserList } from "../pages/Users";
import { Login } from "../pages/Login";
import { PrivateRoute } from "./PrivateRoute";

export function Router() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<UserList />} />
      </Route>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" /> : <Login />}
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
