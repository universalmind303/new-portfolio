import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Center, Container, PaddedContainer } from '../core/layout';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  flex: 1;
  text-align: center;
`;

const Left = styled.div`
  text-align: left;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
`;
class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: undefined,
      email: undefined,
      message: undefined,
    };
  }
  handleChange(e) {
    console.log(e.target.id);
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  handleSubmit() {
    console.log(this.state);
  }
  render() {
    const { name, email, message } = this.state;
    return (
      <Container>
        <Center>
          <h2>Contact</h2>
        </Center>
        <StyledForm onSubmit={this.handleSubmit}>
          <PaddedContainer>
            <FormRow>
              <StyledTextField
                id="name"
                label="Name"
                value={name}
                onChange={this.handleChange}
                margin="normal"

              />
            </FormRow>
            <FormRow>
              <StyledTextField
                id="email"
                label="Email"
                value={email}
                onChange={this.handleChange}
                margin="normal"
                type="email"

              />
            </FormRow>
            <FormRow>
              <StyledTextField
                id="message"
                label="Message"
                placeholder="Message"
                value={message}
                onChange={this.handleChange}
                multiline
                margin="normal"

              />{' '}
            </FormRow>
            <FormRow>
              <Left>
                <Button type="submit"> Send </Button>
              </Left>
            </FormRow>
          </PaddedContainer>
        </StyledForm>
      </Container>
    );
  }
}

export default Contact;
