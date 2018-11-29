import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import propTypes, { defaultProps } from './propTypes';
import Tagline from '../../atoms/text/tagline';
import SubheaderWithTagline from '../../molecules/subheaderWithTagline';
import LinkBand from '../../molecules/linkBand';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;
`;

const ContactContentContainer = styled('div')`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`;

const SeparatorText = styled(Tagline)`
  padding: 15px 0 15px 0;
`;

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  width: 400px;

  @media (max-width: 420px) {
    width: 300px;
  }
`;

const StyledInput = styled('input')`
  margin-bottom: 10px;
  line-height: 1em;
  padding: 0 5px 0 5px;
  border-radius: 2px;
  border: 1px;
  border-style: solid;
  border-color: #FFF;
  font-size: 1em;
`;

const StyledTextArea = styled('textarea')`
  margin-bottom: 10px;
  height: 150px;
  padding: 5px;
  border-radius: 2px;
  border: 1px;
  border-style: solid;
  border-color: #FFF;
  font-size: 1em;
`;

const StyledButton = styled('button')`
  background: ${props => (props.theme.Global.background)};
  color: ${props => (props.theme.Link.accent)};
  font-size: large;
  font-family: Notosans;
  margin: 1px;
  padding: 0.25em 1em;
  border: 2px solid;
  border-color: ${props => (props.theme.Link.accent)};
  border-radius: 45px;
  text-decoration: none;
  min-width: 200px;
  align-self: center;

  &:hover {
    background: ${props => (props.theme.Link.accent)};
    color: ${props => (props.theme.Global.background)};
    border-color: ${props => (props.theme.Global.background)};
  }
`;

class SayHiForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { theme } = this.props;

    return (
      <Container name="sayHi">
        <SubheaderWithTagline
          colour={theme.ColouredInfoBand.textColour}
          headerText="Say Hi"
          taglineText="Want to collaborate, chat, work together?"
        />
        <ContactContentContainer>
          <StyledForm
            name="contact"
            data-netlify
            netlify
            netlify-honeypot="contact"
            action="/thankyou"
          >
            <StyledInput id="name" type="text" name="name" placeholder="Name" />
            <StyledInput id="email" type="email" name="email" placeholder="Email" />
            <StyledInput id="email" type="email" name="email" placeholder="Email" />
            <StyledTextArea id="message" name="message" placeholder="Message" />
            <StyledButton type="submit">Send</StyledButton>
          </StyledForm>
          <SeparatorText>or</SeparatorText>
        </ContactContentContainer>
        <LinkBand />
      </Container>
    );
  }
}

SayHiForm.propTypes = propTypes;
SayHiForm.defaultProps = defaultProps;

export default withTheme(SayHiForm);
