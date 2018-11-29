import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import propTypes, { defaultProps } from './propTypes';
// import Text from '../../atoms/text/text';
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
`;

class SayHiForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { theme } = this.props;
    const { name, email, message } = this.state;

    return (
      <Container name="sayHi">
        <SubheaderWithTagline
          colour={theme.ColouredInfoBand.textColour}
          headerText="Say Hi"
          taglineText="Want to collaborate, chat, work together?"
        />
        <ContactContentContainer>
          <StyledForm name="contact" onSubmit={this.handleSubmit} method="POST" netlify>
            <input id="name" name="name" type="text" placeholder="Name" value={name} />
            <input id="email" name="email" type="email" placeholder="Email" value={email} />
            <textarea id="message" name="message" placeholder="Message" value={message} />
            <input type="submit" value="Submit" />
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
