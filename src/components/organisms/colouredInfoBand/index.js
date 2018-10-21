import React from 'react';
import { withTheme } from 'styled-components';
import propTypes, { defaultProps } from './propTypes';
import ColouredContainer from '../../atoms/layout/colouredContainer';
import HeaderText from '../../atoms/text/header';
import TaglineText from '../../atoms/text/tagline';

const ColouredInfoBand = ({ theme, title, subtitle }) => (
  <ColouredContainer backgroundColour={theme.ColouredInfoBand.backgroundColour}>
    <HeaderText colour={theme.ColouredInfoBand.textColour}>{title}</HeaderText>
    <TaglineText colour={theme.ColouredInfoBand.textColour}>{subtitle}</TaglineText>
  </ColouredContainer>
);

ColouredInfoBand.propTypes = propTypes;
ColouredInfoBand.defaultProps = defaultProps;

export default withTheme(ColouredInfoBand);
