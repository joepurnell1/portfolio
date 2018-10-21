import React from 'react';
import styled, { withTheme } from 'styled-components';
import propTypes, { defaultProps } from './propTypes';
import ColouredContainer from '../../atoms/layout/colouredContainer';
import HeaderText from '../../atoms/text/header';
import TaglineText from '../../atoms/text/tagline';
import SwellingImageLink from '../../molecules/swellingImageLink';
import Github from '../../../images/social/github.svg';

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
        imageSource={Github}
        imageAlt="github"
      />
    </LinkBand>
  </ColouredContainer>
);

ColouredInfoBand.propTypes = propTypes;
ColouredInfoBand.defaultProps = defaultProps;

export default withTheme(ColouredInfoBand);
