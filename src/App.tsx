import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes/dark";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  // Esse estado pode ser salvo nos Cookies do usuário, para quando ele acessar sempre acessar o tema escolhido
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <div className="App">
      {/* O themeProvider irá definir qual é o tema, e tudo que estiver dentro dele herdara esse tema escolhido */}
      <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}
