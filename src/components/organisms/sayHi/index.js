import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import propTypes, { defaultProps } from './propTypes';
import SubheaderWithTagline from '../../molecules/subheaderWithTagline';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;
`;

const ContactContentContainer = styled('div')`
  display: flex;
  flex-direction: column;
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
  font-family: Notosans;
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
  font-family: Notosans;
  resize: none;
`;

const StyledButton = styled('button')`
  background: ${props => (props.theme.Global.background)};
  color: ${props => (props.theme.Link.accent)};
  font-size: large;
  font-family: Notosans;
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

const Hidden = styled('p')`
  visibility: hidden;
  line-height: 0;
  padding: 0;
  margin: 0;
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
          taglineText="Want to collaborate, chat, or work together?"
        />
        <ContactContentContainer>
          <StyledForm
            name="contact"
            data-netlify
            netlify
            netlify-honeypot="bot-field"
            action="/thankyou"
          >
            <Hidden>
              <label htmlFor="bot-field">
                {'Don’t fill this out if you\'re human:'}
                <input name="bot-field" />
              </label>
            </Hidden>
            <StyledInput id="name" type="text" name="name" placeholder="Name" required />
            <StyledInput id="email" type="email" name="email" placeholder="Email" required />
            <StyledTextArea id="message" name="message" placeholder="Message" required />
            <StyledButton type="submit">Send</StyledButton>
          </StyledForm>
        </ContactContentContainer>
      </Container>
    );
  }
}

SayHiForm.propTypes = propTypes;
SayHiForm.defaultProps = defaultProps;

export default withTheme(SayHiForm);
