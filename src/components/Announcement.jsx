import styled from "styled-components";

const Announcements = styled.div`
  background: teal;
  height: 30px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Announcement = () => {
  return <Announcements>Upcoming promos and discounts... </Announcements>;
};

export default Announcement;
