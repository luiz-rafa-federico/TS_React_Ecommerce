import { ProductCard } from "./styles";
import { useCart } from "../../providers/Cart";
import Button from "../Button";
import { IProduct } from "../../types/product";

const Product = ({ product }: { product: IProduct }) => {
  const { addToCart } = useCart();

  const { id, name, priceFormatted, image_url, description } = product;

  return (
    <ProductCard>
      <li key={id}>
        <figure>
          <img src={image_url} alt={name} />
        </figure>
        <div className="productInfo">
          <strong>{name}</strong>
          <strong>{description}</strong>
          <div>
            <span>{priceFormatted}</span>
          </div>
          <Button type="button" onClick={() => addToCart(product, id)}>
            <span>Adicionar ao Carrinho</span>
          </Button>
        </div>
      </li>
    </ProductCard>
  );
};

export default Product;
