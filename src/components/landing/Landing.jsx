import React from "react";
import styled from "styled-components";
import { Container, Center, PaddedContainer } from "../core/layout";



export default () => (
  <Container>
    <Center>
      <h2>About Me</h2>
    </Center>

    <PaddedContainer>
      <Center>
        <div>
          <h4>
            Cory is a Minneapolis based software engineer specializing in
            fullstack web development. He has experience developing applications
            using several leading frameworks and technologies, among them React,
            Angular, Node.js, ES6, C#, SQL, MongoDB and many more!
          </h4>
        </div>
      </Center>
    </PaddedContainer>
  </Container>
);
