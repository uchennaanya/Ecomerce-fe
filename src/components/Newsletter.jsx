import styled from "styled-components";
import { Send } from "@mui/icons-material";

import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background: #fcf5f5;
  flex-direction: column;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;

const InputContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  height: 40px;
  background: white;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background: teal;
  color: white;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 30px;
  ${mobile({ textAlign: "center" })}
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>News letter</Title>
      <Description>Be the first to here from your favorite vendors</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
        {/* </Input> */}
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
