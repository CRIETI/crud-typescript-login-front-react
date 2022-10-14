import { createGlobalStyle } from "styled-components";

//Aqui vou colocar toda a estilização que eu quero que seja global na minha aplicação
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.fontColor};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  textarea:focus, input:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
  }
`;
