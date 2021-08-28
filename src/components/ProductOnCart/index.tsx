import { ProductCard } from "./styles";
import { useCart } from "../../providers/Cart";
import Button from "../Button";

const ProductOnCart = ({ product }) => {
  const { removeFromCart } = useCart();

  const { id, title, priceFormatted, image } = product;

  return (
    <ProductCard key={id}>
      <thead>
        <tr>
          <th></th>
          <th>ITEM</th>
          <th>PREÇO</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="tdPic">
            <img src={image} alt={title} />
          </td>
          <td>
            <strong>{title}</strong>
          </td>
          <td>
            <span>{priceFormatted}</span>
          </td>
          <td className="tdBtn">
            <Button type="button" onClick={() => removeFromCart(id)}>
              <span>Remover</span>
            </Button>
          </td>
        </tr>
      </tbody>
    </ProductCard>
  );
};

export default ProductOnCart;
