import { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IProduct } from "../../types/product";

interface ICartProviderProps {
  children: ReactNode;
}

interface ICartProviderData {
  cart: IProduct[];
  addToCart: (item: IProduct, id: number) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<ICartProviderData>({} as ICartProviderData);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [cart, setCart] = useState<IProduct[]>(() => {
    const local: IProduct[] = JSON.parse(localStorage.getItem("cart"));

    if (local !== undefined) {
      return cart;
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: IProduct, id: number) => {
    const itemOnCart = cart.find(
      (itemOnCart: IProduct) => itemOnCart.id === id
    );
    if (!cart.includes(itemOnCart)) {
      setCart([...cart, item]);
    } else {
      toast.error("ERRO! Produtos duplicados não podem ser incluídos.");
    }
  };

  const removeFromCart = (id: number) => {
    const newCart = cart.filter((itemOnCart: IProduct) => itemOnCart.id !== id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
