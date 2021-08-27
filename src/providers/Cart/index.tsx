import { ReactNode, Dispatch, SetStateAction } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { IProduct } from "../../types/product";

interface ICartProviderProps {
  children: ReactNode;
}

interface ICartProviderData {
  cart: IProduct[];
  addToCart: (item: IProduct, id: number) => void;
  removeFromCart: (id: number) => void;
  setCart: Dispatch<SetStateAction<IProduct[]>>;
}

const CartContext = createContext<ICartProviderData>({} as ICartProviderData);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [cart, setCart] = useState<IProduct[]>([] as IProduct[]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: IProduct) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ setCart, cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
