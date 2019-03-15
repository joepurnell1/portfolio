import React from 'react';
import styled from 'styled-components';
import SwellingImageLink from '../swellingImageLink';
import Github from '../../../images/social/github.svg';
import Twitter from '../../../images/social/twitter.svg';
import Linkedin from '../../../images/social/linkedin.svg';

const LinkBand = styled('div')`
  min-width: 300px;
  max-width: 35vw;
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-top: 4vh;

  @media (max-width: 420px) {
    margin: 50px 8px 0 8px;
  }
`;

const SwellingLink = styled(SwellingImageLink).attrs({
  size: '50px',
  hoverSize: '55px',
})``;

const ColouredInfoBand = () => (
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
);

export default styled(ColouredInfoBand)``;
