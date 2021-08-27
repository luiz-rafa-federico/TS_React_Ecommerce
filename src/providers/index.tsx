import { AuthProvider } from "./Auth";
import { CartProvider } from "./Cart";
import { RegisterProvider } from "./Register";
import { SearchProvider } from "./Search";
import { ProductsProvider } from "./Products";
import { ReactNode } from "react";

interface IProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
  return (
    <AuthProvider>
      <CartProvider>
        <RegisterProvider>
          <SearchProvider>
            <ProductsProvider>{children}</ProductsProvider>
          </SearchProvider>
        </RegisterProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default Providers;
