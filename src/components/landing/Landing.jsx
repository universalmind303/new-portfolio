import React from 'react';
import { Center, Container, PaddedContainer } from '../core/layout';


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
            full-stack web development. He has experience developing applications
            using several leading frameworks and technologies, among them JavaScript, Nodejs, React, Angular, Java, Spring Boot, C#, Dotnet Core, and many more
          </h4>
        </div>
      </Center>
    </PaddedContainer>
  </Container>
);
