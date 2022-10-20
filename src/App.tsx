import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts/AuthContext";
import { Router } from "./routes/Router";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes/dark";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div className="App">
      <AuthProvider>
        <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}
