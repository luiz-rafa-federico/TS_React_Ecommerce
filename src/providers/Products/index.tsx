import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import api from "../../services/api";
import formatValue from "../../utils/formatValue";
import { IProduct } from "../../types/product";

interface IProductsProviderProps {
  children: ReactNode;
}

interface IProductsProviderData {
  loading: boolean;
  loadProducts: () => void;
  products: IProduct[];
}

const ProductsContext = createContext<IProductsProviderData>(
  {} as IProductsProviderData
);

export const ProductsProvider = ({ children }: IProductsProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);
  const [loading, setLoading] = useState<boolean>(true);

  async function loadProducts() {
    const response = await api.get("/products/");

    const data = response.data.map((product: IProduct) => ({
      ...product,
      priceFormatted: formatValue(product.price),
    }));

    setLoading(false);
    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ loading, loadProducts, products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
