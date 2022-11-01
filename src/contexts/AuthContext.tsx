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
  getLogged: () => void;
  loading: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  name: string;
  email: string;
  loggedAt: string;
  token: string;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const isAuthenticated = !!user;

  useEffect(() => {
    async function getUser() {
      const userLogged = await getLogged();
      setUser(userLogged);
      setLoading(false);
    }

    getUser();
  }, []);

  const setLogged = (user: User) => {
    localStorage.setItem("logged", JSON.stringify(user));

    return true;
  };

  function logout() {
    localStorage.removeItem("logged");
    setUser(undefined);
  }

  const getLogged = () => {
    const logged = localStorage.getItem("logged");

    if (logged) {
      const userLogged = JSON.parse(logged);
      console.log(userLogged.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Basic ${userLogged.token}`;
      axios.defaults.headers.common["Cache-Control"] = "no-store";

      return userLogged;
    }

    return;
  };

  async function signIn({ email, password }: SignInCredentials) {
    const authorization = `${email}:${password}`;
    let token = btoa(authorization);

    try {
      const response = await axios.get("http://localhost:3333/auth", {
        headers: {
          Authorization: `Basic ${token}`,
          "Cache-Control": "no-store",
        },
      });

      const { name, email, loggedAt } = response.data;

      setUser({ name, email, loggedAt, token });
      setLogged({ name, email, loggedAt, token });

      return true;
    } catch (error) {
      setUser(undefined);
      return false;
    }
  }

  return (
    <AuthContext.Provider
      value={{ logout, user, signIn, isAuthenticated, getLogged, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
