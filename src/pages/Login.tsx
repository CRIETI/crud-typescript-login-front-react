import { useState } from "react";
import { Button } from "../Button/Button";
import { Input, LoginContainer } from "./Login.styles";

export function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  console.log(user, password);

  return (
    <LoginContainer>
      <form>
        <div>
          <label>Usuário</label>
          <Input
            id="user"
            name="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Digite aqui seu usuário"
          />
        </div>
        <div>
          <label>Senha</label>
          <Input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite aqui sua senha"
          />
        </div>
        <Button />
      </form>
    </LoginContainer>
  );
}
