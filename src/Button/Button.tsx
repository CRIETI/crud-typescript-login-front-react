import { ButtonContainer, ButtonVariants } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariants;
}

//Agora utilizo o Button que criei dentro do meu arquivo ts ao invés do ButtonHTML
//Passado assim a utilizar um componente de estilização
//Ao invés de passar um className posso passar a propriedade que eu defini
export function Button({ variant = "primary", ...rest }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...rest}>
      Enviar
    </ButtonContainer>
  );
}
