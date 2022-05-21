import React from "react";
import styled from "styled-components";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid;
  display: flex;
  margin-left: 25px;
  padding: 5px;
  justify-content: center;
  ${mobile({ margin: "0 15px 0 10px" })}
`;

const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
  ${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
  font-weight: bolder;
  ${mobile({ fontSize: "20px" })}
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon></SearchIcon>
          </SearchContainer>
        </Left>
        <Center>
          <Logo> EVERDAY BUY. </Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="primary">
              <LocalGroceryStoreOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
