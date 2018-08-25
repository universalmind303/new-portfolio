import React from 'react';
import { Center, Container, PaddedContainer } from '../core/layout';


export default () => (
  <Container>
    <Center>
      <h2>Projects</h2>
    </Center>

    <PaddedContainer>
      <div>
        <span>
          <h4>Production Portal</h4>
        </span>
        <span>
          Every company needs a way to accurately track their accounts,
          inventory, and wholesale, and outdated ways become a pain point for an
          expanding company. The goal was to replace an outdated AS400 mainframe
          with a streamlined single page web application to help the business
          grow.
        </span>
        <br />
        <span>
          Production Portal was built using C# MSSQL, Angular, and Material
          Design
        </span>
      </div>
    </PaddedContainer>
    <PaddedContainer>
      <div>
        <span>
          <h4>Smart Camper</h4>
        </span>
        <span>Smart Camper has been my personal endeaver to automate every aspect of my tiny house on wheels.</span>
        <br />
        <span>Smart Camper was built using React-Native, and Node.js</span>
      </div>
    </PaddedContainer>
  </Container>
);
