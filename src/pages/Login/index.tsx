import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContainerLogin } from "./styles";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import { useAuth } from "../../providers/Auth";
import { Link } from "react-router-dom";
import { useHistory, Redirect } from "react-router-dom";
import { IUserDataLogin } from "../../types/userDataLogin";

const Login = () => {
  const { signIn, isAuthenticated } = useAuth();
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 digitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserDataLogin>({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: IUserDataLogin) => {
    signIn(data, history);
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
        <h1>Login</h1>
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
            Sem conta? Faça{" "}
            <Link to="/register">
              <span className="cadastro">cadastro</span>
            </Link>
          </span>
        </form>
      </ContainerLogin>
    </motion.div>
  );
};

export default Login;
