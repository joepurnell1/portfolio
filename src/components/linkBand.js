import React from 'react';
import styled from 'styled-components';
import SwellingImageLink from './swellingImageLink';
import Github from '../images/social/github.svg';
import Twitter from '../images/social/twitter.svg';
import Linkedin from '../images/social/linkedin.svg';
import Mail from '../images/social/mail.svg';

const LinkBand = styled('div')`
  min-width: 300px;
  max-width: 350px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

const SwellingLink = styled(SwellingImageLink).attrs({
  size: '40px',
  hoverSize: '45px',
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
    <SwellingLink
      link="mailto:joepurnell1@gmail.com"
      imageSource={Mail}
      imageAlt="email"
    />
  </LinkBand>
);

export default styled(ColouredInfoBand)``;
