import styled from "@emotion/styled";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-betwwen;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
