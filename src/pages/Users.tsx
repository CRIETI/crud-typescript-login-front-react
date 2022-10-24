import { Header } from "../components/Header";

import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { UserModal, User } from "../components/modais/UserModal";
import { Menu } from "../components/Menu";
import { MainContainer } from "./User.styles";
import { Button } from "../components/Button";
import { Card } from "../components/UserCards/Card";

export function UserList() {
  const MySwal = withReactContent(Swal);
  const [userList, setUserList] = useState<User[]>([]);
  const [closeModal, setCloseModal] = useState(false);

  useEffect(() => {
    axios.get<User[]>("http://localhost:3333/users").then((response) => {
      setUserList(response.data);
    });
  }, [closeModal]);

  const showSwal = () => {
    MySwal.fire({
      title: <strong>Criar usuário</strong>,
      html: <UserModal closeModal={MySwal.close} />,
      showConfirmButton: false,
    }).then(() => setCloseModal(true));
  };

  return (
    <div>
      <Menu />

      <Header label="Usuários" />

      <MainContainer>
        <Button label="Criar Usuário" onClick={showSwal} />
        {userList.map((user) => {
          return <Card data={user} />;
        })}
      </MainContainer>
    </div>
  );
}
