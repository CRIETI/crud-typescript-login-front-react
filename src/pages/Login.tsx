import { Input, LoginContainer, InputContainer } from "./Login.styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Button } from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

const newLoginValidationSchema = zod.object({
  user: zod.string().min(2, "Informe o seu nome de usuário"),
  password: zod.string().min(2, "Informe a senha"),
});

type Login = zod.infer<typeof newLoginValidationSchema>;

export function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState, reset } = useForm<Login>({
    resolver: zodResolver(newLoginValidationSchema),
    defaultValues: {
      user: "",
      password: "",
    },
  });

  //Criar um estado de erros
  // const [erros, setErrors] = useState()

  function handleSubmitLogin(data: Login) {
    /* Agora vou fazer minha chamada axios para a api mandando os dados Vou receber esses dados e conferir se estão certos ou não, e conforme a resposta tomo minha proxima decisão 
    
    if(meus dados estão corretos){
      navigate("/");
    } else {
      setErros( aqui vou colocar a mensagem de erro da API)

      e vou dar  reset() nos campos se achar necessário;
    }
    */
  }

  const errorUser = formState?.errors?.user;

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
          {errorUser && <span>{errorUser?.message}</span>}
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

        {/* E aqui posso adicionar os meus erros vindos da API.. Ou posso usar alguma outra biblioteca para apresentar o erro em tela: react-toastify por exemplo*/}
      </form>
    </LoginContainer>
  );
}
