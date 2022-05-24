import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const H1 = styled.h1`
  font-weight: 600;
  font-size: 24px;
`;

const NotFound = () => {
  return (
    <Container>
      <H1>
        404 Page Not Found <a href="/">Home</a>
      </H1>
    </Container>
  );
};

export default NotFound;
