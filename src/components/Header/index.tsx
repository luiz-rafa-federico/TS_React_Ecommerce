import { Link } from "react-router-dom";
import { Container } from "./styles";
import CartBadge from "../CartBadge";
import Input from "../../components/Input";
import { useSearch } from "../../providers/Search";

const Header = () => {
  const { searchInput, setSearchInput } = useSearch();

  return (
    <Container>
      <h2>
        <Link to="/">Kenzie Shop</Link>
      </h2>
      <Input
        placeholder="Busque pelo nome do produto"
        type="text"
        value={searchInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchInput(e.target.value)
        }
      />
      <div>
        <div>
          <span className="loginLink">
            <Link to="/dashboard">Pagar</Link>
          </span>
        </div>
        <div>
          <span className="loginLink">
            <Link to="/login">Entrar</Link>
          </span>
        </div>
        <div>
          <span className="loginLink">
            <Link to="/register">Cadastro</Link>
          </span>
        </div>
        <div>
          <span className="cartLink">
            <Link to="/cart">
              <CartBadge />
            </Link>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Header;
