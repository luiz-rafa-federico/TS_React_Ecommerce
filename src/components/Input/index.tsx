import { Container, InputContainer } from "./styles";
import SearchIcon from "@material-ui/icons/Search";

const Input = ({ ...rest }) => {
  return (
    <Container>
      <InputContainer>
        <input {...rest} />
        <SearchIcon color="action" />
      </InputContainer>
    </Container>
  );
};

export default Input;
