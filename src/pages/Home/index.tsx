import { motion } from "framer-motion";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ContainerProducts, ProductCardContainer } from "./styles";
import Product from "../../components/Product";
import { useSearch } from "../../providers/Search";
import { useProducts } from "../../providers/Products";

const Home = () => {
  const { searchInput } = useSearch();
  const { loading, products } = useProducts();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContainerProducts>
        {loading ? (
          <>
            <CircularProgress size={50} />
            <span>Processando...</span>
            <CircularProgress size={50} />
          </>
        ) : (
          <>
            <ProductCardContainer>
              {products // eslint-disable-next-line
                .filter((product) => {
                  if (searchInput === "") {
                    return <Product key={product.id} product={product} />;
                  } else if (
                    product.name
                      .toLowerCase()
                      .includes(searchInput.toLowerCase())
                  ) {
                    return <Product key={product.id} product={product} />;
                  }
                })
                .map((product) => (
                  <Product key={product.id} product={product} />
                ))}
            </ProductCardContainer>
          </>
        )}
      </ContainerProducts>
    </motion.div>
  );
};

export default Home;
