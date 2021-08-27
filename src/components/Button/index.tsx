import { ReactNode } from "react";
import { Container } from "./styles";

interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, ...rest }: IButtonProps) => (
  <Container {...rest}>{children}</Container>
);

export default Button;
