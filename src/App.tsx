import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "./Button/Button";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes/dark";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  // Esse estado pode ser salvo nos Cookies do usuário, para quando ele acessar sempre acessar o tema escolhido
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <div className="App">
      <h1>Hello world</h1>
      {/* O themeProvider irá definir qual é o tema, e tudo que estiver dentro dele herdara esse tema escolhido */}
      <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
        <button onClick={() => setIsDarkTheme(!isDarkTheme)}>DARKTHEME</button>
        <Button variant="primary" />
        <Button variant="secondary" />
        <Button variant="success" />
        <Button variant="danger" />
        <Button />
        {/*Posso colocar em qualquer lugar, porém dentro do ThemeProvider*/}
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}
