import React from 'react';
import styled, { withTheme } from 'styled-components';
import propTypes, { defaultProps } from './propTypes';
import SwellingImageLink from '../../molecules/swellingImageLink';
import Github from '../../../images/social/github.svg';
import Twitter from '../../../images/social/twitter.svg';
import Linkedin from '../../../images/social/linkedin.svg';
import HeaderWithTagline from '../../molecules/headerWithTagline';

const LinkBand = styled('div')`
  min-width: 400px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  height: 45px;

  @media (max-width: 420px) {
    min-width: 300px;
    margin: 50px 8px 0 8px;
  }
`;

const SwellingLink = styled(SwellingImageLink).attrs({
  size: '45px',
  hoverSize: '50px',
})``;

const Container = styled('div')`
  display: flex;
  min-height: 400px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ColouredInfoBand = ({ theme, title, subtitle }) => (
  <Container backgroundColour={theme.ColouredInfoBand.backgroundColour}>
    <HeaderWithTagline
      colour={theme.ColouredInfoBand.textColour}
      headerText={title}
      taglineText={subtitle}
    />
    <LinkBand>
      <SwellingLink
        link="https://github.com/joepurnell1"
        imageSource={Github}
        imageAlt="github"
      />
      <SwellingLink
        link="https://twitter.com/joepurnell8?lang=en"
        imageSource={Twitter}
        imageAlt="twitter"
      />
      <SwellingLink
        link="https://www.linkedin.com/in/joe-purnell-7294295b/"
        imageSource={Linkedin}
        imageAlt="linkedin"
      />
    </LinkBand>
  </Container>
);

ColouredInfoBand.propTypes = propTypes;
ColouredInfoBand.defaultProps = defaultProps;

export default withTheme(ColouredInfoBand);
