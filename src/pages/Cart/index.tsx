import { motion } from "framer-motion";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import { useCart } from "../../providers/Cart";
import formatValue from "../../utils/formatValue";
import {
  CartContainer,
  Container404,
  CheckoutCard,
  CardsDisplay,
} from "./styles";
import ProductOnCart from "../../components/ProductOnCart";
import ShoppingImg from "../../assets/shopping.png";
import { IProduct } from "../../types/product";

const Cart = () => {
  const { cart } = useCart();
  const history = useHistory();

  const subtotal = formatValue(
    Number(cart.reduce((acc, product) => product.price + acc, 0).toFixed(2))
  );

  const handleToCheckout = () => {
    history.push("/login");
  };

  if (!cart.length) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container404>
          <h1>Sem produtos no carrinho. Que tal ir às compras?</h1>
          <img src={ShoppingImg} alt="shopping-figure" />
          <Button onClick={() => history.push("/")}>
            {" "}
            Quero encontrar produtos
          </Button>
        </Container404>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CartContainer>
        <CardsDisplay>
          {cart.map((product: IProduct) => (
            <ProductOnCart key={product.id} product={product} />
          ))}
        </CardsDisplay>
        <CheckoutCard>
          <strong>Resumo do pedido:</strong>
          <h4>{cart.length} produtos</h4>
          <h4>Total: {subtotal}</h4>
          <Button type="button" onClick={handleToCheckout}>
            Finalizar o pedido
          </Button>
        </CheckoutCard>
      </CartContainer>
    </motion.div>
  );
};

export default Cart;
