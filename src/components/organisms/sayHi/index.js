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

// const EmailText = styled(Text)`
//   font-size: 2.5em;
//   color: #FFFFFF;

//   @media (max-width: 450px) {
//     font-size: 2em;
//   }
// `;

// const EmailContainer = styled('a')`
//   text-decoration: none;
//   color: #FFFFFF;
//   display: flex;
//   flex-wrap: wrap;

//   & :hover {
//     text-decoration: underline;
//   }
// `;

const ContactContentContainer = styled('div')`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`;

const SeparatorText = styled(Tagline)`
  padding: 15px 0 15px 0;
`;

// const StyledForm = styled('form')`
//   display: flex;
//   flex-direction: column;
// `;

class SayHiForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { theme } = this.props;
    // const { name, email, message } = this.state;

    return (
      <Container name="sayHi">
        <SubheaderWithTagline
          colour={theme.ColouredInfoBand.textColour}
          headerText="Say Hi"
          taglineText="Want to collaborate, chat, work together?"
        />
        <ContactContentContainer>
          <form
            name="contact"
            data-netlify="true"
            netlify
            netlify-honeypot="bot-field"
            hidden
          >
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label htmlFor="name">
                Name
                <input id="name" type="text" name="name" />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
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
