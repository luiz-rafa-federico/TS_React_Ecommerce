import { ReactNode, Dispatch, SetStateAction } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { History } from "history";
import { IUserDataLogin } from "../../types/userDataLogin";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthProviderData {
  signIn: (userData: IUserDataLogin, history: History) => void;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  isCheckout: boolean;
  setIsCheckout: Dispatch<SetStateAction<boolean>>;
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<IAuthProviderData>({} as IAuthProviderData);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const getToken: string = localStorage.getItem("token") || "";
  const [token, setToken] = useState<string>(getToken);
  const [isCheckout, setIsCheckout] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const signIn = (userData: IUserDataLogin, history: History) => {
    api
      .post("/login/", userData)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("token", response.data.access);
        setToken(response.data.access);
        setIsAuthenticated(true);
        toast.success("Usuário logado!");
        setIsCheckout(true);
        return history.push("/dashboard");
      })
      .catch((err) => {
        console.log("Error", err);
        toast.error(
          "Verifique seus dados. Caso seja um novo usuário, faça cadastro."
        );
      });
  };

  useEffect(() => {
    if (getToken !== "") {
      return setIsAuthenticated(true);
    }
  }, [isAuthenticated, getToken]);

  return (
    <AuthContext.Provider
      value={{
        setToken,
        signIn,
        token,
        isCheckout,
        setIsCheckout,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
