import { Input, LoginContainer, InputContainer } from "./Login.styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Button } from "../components/Button/Button";

const newLoginValidationSchema = zod.object({
  user: zod.string().min(2, "Informe o seu nome de usuário"),
  password: zod.string().min(2, "Informe a senha"),
});

type Login = zod.infer<typeof newLoginValidationSchema>;

export function Login() {
  const { register, handleSubmit, watch, formState, reset } = useForm<Login>({
    resolver: zodResolver(newLoginValidationSchema),
    defaultValues: {
      user: "",
      password: "",
    },
  });

  function handleSubmitLogin(data: Login) {
    console.log(data);
    reset();
  }

  const errors = formState.errors;

  const user = watch("user") && watch("password");

  console.log(user);

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit(handleSubmitLogin)}>
        <InputContainer>
          <label>Usuário</label>
          <Input
            id="user"
            placeholder="Digite aqui seu usuário"
            {...register("user")}
          />
          {errors?.user && <span>{errors?.user?.message}</span>}
        </InputContainer>
        <InputContainer>
          <label>Senha</label>
          <Input
            id="password"
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
        </InputContainer>
        <Button type="submit" />
      </form>
    </LoginContainer>
  );
}
