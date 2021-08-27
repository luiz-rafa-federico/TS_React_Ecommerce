import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContainerLogin } from "./styles";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import { useRegister } from "../../providers/Register";
import { Link } from "react-router-dom";
import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import { IUserDataRegister } from "../../types/userDataRegister";

const Register = () => {
  const { registerUser } = useRegister();
  const history = useHistory();
  const { isAuthenticated } = useAuth();

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 digitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: IUserDataRegister) => {
    registerUser(data, history);
    reset();
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard"></Redirect>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContainerLogin>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <div>
            <TextField
              label="username"
              variant="outlined"
              size="medium"
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
          </div>
          <div>
            <TextField
              label="email"
              variant="outlined"
              size="medium"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </div>
          <div>
            <TextField
              label="senha"
              variant="outlined"
              size="medium"
              type="password"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </div>
          <Button type="submit">Enviar</Button>
          <span>
            Já tem conta? Faça{" "}
            <Link to="/login">
              <span className="login">login</span>
            </Link>
          </span>
        </form>
      </ContainerLogin>
    </motion.div>
  );
};

export default Register;
