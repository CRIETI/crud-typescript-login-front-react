import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<boolean>;
  isAuthenticated: boolean;
  user: User | undefined;
  logout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  name: string;
  email: string;
  loggedAt: string;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const user = getLogged();
    setUser(user);
  }, []);

  const setLogged = (user: User) => {
    localStorage.setItem("logged", JSON.stringify(user));
    return true;
  };

  function logout() {
    console.log("logout");
    localStorage.removeItem("logged");
    setUser(undefined);
  }

  const getLogged = () => {
    const logged = localStorage.getItem("logged");
    return logged && JSON.parse(logged);
  };

  async function signIn({ email, password }: SignInCredentials) {
    const authorization = `${email}:${password}`;
    let base64 = btoa(authorization);

    try {
      const response = await axios.get("http://localhost:3333/auth", {
        headers: {
          Authorization: `Basic ${base64}`,
          "Cache-Control": "no-store",
        },
      });

      const { name, email, loggedAt } = response.data;

      setUser({ name, email, loggedAt });
      setLogged({ name, email, loggedAt });

      return true;
    } catch (error) {
      setUser(undefined);
      return false;
    }
  }

  return (
    <AuthContext.Provider value={{ logout, user, signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
