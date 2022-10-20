import { useContext } from "react";
import { Button } from "../components/Button";
import { AuthContext } from "../contexts/AuthContext";

export function Home() {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <Button label="Sair" onClick={logout} />
      <div>Home {user?.email}</div>
    </>
  );
}
