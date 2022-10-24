import { FormEvent, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { User } from "phosphor-react";
import {
  ContentContainer,
  SidebarContainer,
  UserContainer,
  UserData,
} from "./Header.styles";
import { Button } from "./Button";

interface SidebarProps {
  label: string;
}

export function Header({ label }: SidebarProps) {
  const { user, logout } = useContext(AuthContext);

  return (
    <SidebarContainer>
      <ContentContainer>
        <h1>{label}</h1>
        <UserContainer>
          <UserData>
            <User size={32} />
            <strong>{user?.name}</strong>
          </UserData>
          <Button width={100} height={50} label="Sair" onClick={logout} />
        </UserContainer>
      </ContentContainer>
    </SidebarContainer>
  );
}
