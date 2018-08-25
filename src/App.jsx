import blue from '@material-ui/core/colors/blue';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import AppBar from './components/appBar';
import Landing from './components/landing';
import { ScrollView } from './components/core/layout';
import Projects from './components/projects';
import Header from './components/header';
import Contact from './components/contact';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
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
