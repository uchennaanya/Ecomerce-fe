import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Pinterest,
  Room,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: white;
  background: #${(props) => props.color};
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ background: "#fff8f8" })}
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 1px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>EVERYDAY BUY.</Logo>
        <Desc>
          Everydaybuy. is your one stop platform if your a vendor and your
          looking for how to make sales, we got covered lets here from you.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook></Facebook>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram></Instagram>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <LinkedIn></LinkedIn>
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest></Pinterest>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man fashion</ListItem>
          <ListItem>Woman fashion</ListItem>
          <ListItem>Accessaries</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Ariaria main market, Abia
          state Nig.
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> 234 7062725781
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          contact@everydaybuy.com
        </ContactItem>
        <Payment src="https://flyclipart.com/thumb2/credit-card-png-images-transparent-free-download-672247.png" />
      </Right>
    </Container>
  );
};

export default Footer;
