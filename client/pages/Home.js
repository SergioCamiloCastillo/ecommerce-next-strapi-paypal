import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import ProductCard from "./ProductCart";
import { fetchProducts } from "./services/api";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Container>
        <Grid container>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} md={4}>
              <ProductCard product={product}></ProductCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
