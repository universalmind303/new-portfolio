import React from "react";
import { Center, Avatar, PaddedContainer } from "../core/layout";
import styled from "styled-components";
import PortfolioPic from "../../assets/croppedPortfolioPic.jpg";

const Container = styled.div`
  height: 350px;
  background: blue;
`;

export default () => (
  <Container>
    <PaddedContainer>
      <Center>
        <Avatar src={PortfolioPic} alt="me" />
        <h2>Cory Grinstead</h2> <h3>Software Developer</h3>{" "}
      </Center>
    </PaddedContainer>
  </Container>
);
