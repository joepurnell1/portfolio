import React from 'react';
import styled, { withTheme } from 'styled-components';
import propTypes, { defaultProps } from './propTypes';
import ColouredContainer from '../../atoms/layout/colouredContainer';
import HeaderText from '../../atoms/text/header';
import TaglineText from '../../atoms/text/tagline';
import SwellingImageLink from '../../molecules/swellingImageLink';
import Github from '../../../images/social/github.svg';
import Twitter from '../../../images/social/twitter.svg';
import Linkedin from '../../../images/social/linkedin.svg';

const LinkBand = styled('div')`
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  height: 45px;
`;

const SwellingLink = styled(SwellingImageLink).attrs({
  size: '40px',
  hoverSize: '45px',
})``;

const ColouredInfoBand = ({ theme, title, subtitle }) => (
  <ColouredContainer backgroundColour={theme.ColouredInfoBand.backgroundColour}>
    <HeaderText colour={theme.ColouredInfoBand.textColour}>{title}</HeaderText>
    <TaglineText colour={theme.ColouredInfoBand.textColour}>{subtitle}</TaglineText>
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
  </ColouredContainer>
);

ColouredInfoBand.propTypes = propTypes;
ColouredInfoBand.defaultProps = defaultProps;

export default withTheme(ColouredInfoBand);
