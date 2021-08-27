import { createContext, useContext, ReactNode } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { History } from "history";
import { IUserDataRegister } from "../../types/userDataRegister";

interface IRegisterContextProps {
  children: ReactNode;
}

interface IRegisterProviderData {
  registerUser: (data: IUserDataRegister, history: History) => void;
}

const RegisterContext = createContext<IRegisterProviderData>(
  {} as IRegisterProviderData
);

export const RegisterProvider = ({ children }: IRegisterContextProps) => {
  const registerUser = (data: IUserDataRegister, history: History) => {
    api
      .post("/register/", data)
      .then((_) => {
        toast.success("Usuário criado com sucesso. Faça Login!");
        return history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Usuário já cadastrado. Faça login!");
      });
  };

  return (
    <RegisterContext.Provider value={{ registerUser }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
