import { useContext, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { InputsContainer, LoginContainer } from "./Login.styles";
import { useForm, FormProvider } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const newLoginValidationSchema = zod.object({
  email: zod
    .string()
    .min(1, "Informe o seu email")
    .email("Informe um e-mail válido"),
  password: zod.string().min(1, "Informe a sua senha"),
});

type Login = zod.infer<typeof newLoginValidationSchema>;

export function Login() {
  const navigate = useNavigate();
  const { signIn, user } = useContext(AuthContext);
  const [errorLogin, setErrorLogin] = useState("");

  const methods = useForm<Login>({
    resolver: zodResolver(newLoginValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, formState } = methods;

  async function handleSubmitLogin(data: Login) {
    const login = await signIn(data);
    if (login) {
      navigate("/");
    } else {
      setErrorLogin("Login e/ou senha incorreto(s)");
    }
  }

  console.log(errorLogin);

  const { errors } = formState;

  return (
    <LoginContainer>
      <img
        src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        alt="Mesa de Trabalho"
      />

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleSubmitLogin)}>
          <h1>Fazer Login</h1>
          <InputsContainer>
            <Input
              width={176}
              height={72}
              label="Email"
              id="email"
              placeholder="Digite seu email"
              errorMessage={errors.email?.message}
            />

            <Input
              label="Senha"
              id="password"
              placeholder="Digite sua senha"
              width={176}
              height={72}
              errorMessage={errors.password?.message}
              type="password"
            />
          </InputsContainer>
          <Button label="Login" />
          <span>{errorLogin}</span>
        </form>
      </FormProvider>
    </LoginContainer>
  );
}
