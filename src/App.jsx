import deepPurple from "material-ui/colors/deepPurple";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import React from "react";
import AppBar from "./components/appBar";
import Landing from "./components/landing";
import { ScrollView } from "./components/core/layout";
import Projects from "./components/projects";
import Header from "./components/header";
import Contact from "./components/contact";

const theme = createMuiTheme({
  palette: {
    primary: deepPurple
  }
});
const App = () => (
  <MuiThemeProvider theme={theme}>
    <React.Fragment>
      <AppBar />
      <ScrollView>
        <Header />
        <Landing />
        <Projects />
        <Contact />
      </ScrollView>
    </React.Fragment>
  </MuiThemeProvider>
);

export default App;
