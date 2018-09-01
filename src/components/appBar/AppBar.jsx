import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import styled from 'styled-components';
import Github from '../../assets/GitHub.png';
import LinkedIn from '../../assets/LinkedIn.png';


const IconContainer = styled.div`
  flex: 1;
  text-align: right;
`;
const AppBarContainer = styled.div`
  flex-grow: 1;
`;
const FlexTypography = styled(Typography)`
  flex: 1;
`;
const Icon = styled.img`
  height: 36px;
  width: 36px;
`;
const StyledButton = styled(Button)`
  && {
    padding: 0px; 
    min-width: 50px;
  }

`;

const StyledAppBar = styled(AppBar)`
  max-width: 100vw;
  left: 0 !important;
`;

// eslint-disable-next-line
const handleGithubPress = () => window.open("https://www.github.com/universalmind303");
// eslint-disable-next-line
const handleLinkedInPress = () => window.open("https://www.linkedin.com/in/cory-grinstead/");

function MyAppBar() {
  return (
    <AppBarContainer>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <FlexTypography className="flex" variant="title" color="inherit">
            Cory Grinstead
          </FlexTypography>
          <IconContainer>
            <StyledButton color="inherit" onClick={handleGithubPress}>
              <Icon src={Github} alt="github" />
            </StyledButton>
            <StyledButton color="inherit" >
              <Icon src={LinkedIn} alt="linkedin" onClick={handleLinkedInPress} />
            </StyledButton>
          </IconContainer>
        </Toolbar>
      </AppBar>
    </AppBarContainer>
  );
}

export default MyAppBar;
