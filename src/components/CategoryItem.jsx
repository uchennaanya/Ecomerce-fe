import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 50px;
`;

const Button = styled.button`
  padding: 10px;
  background: white;
  color: gray;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button> Shop Now </Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
