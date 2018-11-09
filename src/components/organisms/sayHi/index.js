import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import propTypes, { defaultProps } from './propTypes';
import Text from '../../atoms/text/text';
import Tagline from '../../atoms/text/tagline';
import HeaderWithTagline from '../../molecules/headerWithTagline';
import LinkBand from '../../molecules/linkBand';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;
`;

const EmailText = styled(Text)`
  font-size: 3em;
  color: #FFFFFF;
`;

const EmailContainer = styled('a')`
  text-decoration: none;
  color: #FFFFFF;
  display: flex;
  flex-wrap: wrap;

  & :hover {
    text-decoration: underline;
  }
`;

const ContactContentContainer = styled('div')`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`;

const SeparatorText = styled(Tagline)`
  padding: 25px 0 25px 0;
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
        <HeaderWithTagline
          colour={theme.ColouredInfoBand.textColour}
          headerText="Say Hi"
          taglineText="Want to collaborate, chat, or work together?"
        />
        <ContactContentContainer>
          <EmailContainer
            href="mailto:joepurnell1@gmail.com"
          >
            <EmailText>joepurnell1@gmail.com</EmailText>
          </EmailContainer>
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