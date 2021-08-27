import { ProductCard } from "./styles";
import { useCart } from "../../providers/Cart";
import Button from "../Button";
import { IProduct } from "../../types/product";

const ProductOnCart = ({ product }: IProduct) => {
  const { removeFromCart } = useCart();

  const { id, name, priceFormatted, image_url } = product;

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
            <img src={image_url} alt={name} />
          </td>
          <td>
            <strong>{name}</strong>
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
