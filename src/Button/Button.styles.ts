import styled, { css } from "styled-components";

export type ButtonVariants = "primary" | "secondary" | "danger" | "success";

// Sempre vamos criar uma tipagem para dizer o que vamos receber nesse componente
interface ButtonContainerProps {
  variant: ButtonVariants;
}

// Constante definindo cada cor conforme o que vem na propriedade
const buttonVariants = {
  primary: "blue",
  secondary: "purple",
  danger: "red",
  success: "green",
};

/* Nome deve ser maiúsculo, pois estamos importando COMPONENTES DE ESTILIZAÇÃO
Uso o que importei e utilizado .button, que significa herdar o próprio button do HTML
Sintaxe do javascript chamada template literals que seriam as duas crases ``
e dentro dela eu posso colocar meu css
pra conseguir visualizar a sintaxe do css, instalar a extensão vscode-styled-components

interpolção ${}, que nada mais é que a adição de javascript dentro do template literals
quando adiciono essa interpoloção o Styles Componente entente como uma função que recebe todas as propriedades
do  Compoente, nesse caso o ButtonContainer recebe a variant. então consigo dizer:
retorna a cor conforme o que estamos recebendo de propriedade do Componente
props.variant que vem do nosso botão.
o "css" é só utilizado para formatação do código ficar mais bonita
*/
export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 300px;
  height: 50px;
  font-size: 16px;

  /* Da mesma maneira que abaixo consigo pegar as propriedades, consigo pega tbm a propriedade theme*/
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.primary};
  /* ${(props) => {
    return css`
      color: ${buttonVariants[props.variant]};
    `;
  }} */
`;
