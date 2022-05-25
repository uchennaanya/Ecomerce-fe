import styled from "@emotion/styled";
// import { useState } from "react";
import { popularProducts } from "../data";
import Product from "./Product";
// import axios from "axios";
// import res from "express/lib/response";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-betwwen;
`;

const Products = (cat, filters, sort) => {
  // const [products, setProducts] = useState([]);

  // const [filteredProducts, setFilteredProducts] = useState([]);

  console.log(sort, filters, cat);
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
