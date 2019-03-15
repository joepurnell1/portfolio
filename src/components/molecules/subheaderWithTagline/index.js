import React from 'react';
import styled from 'styled-components';
import propTypes from './propTypes';
import HeaderText from '../../atoms/text/subheader';
import TaglineText from '../../atoms/text/tagline';

const PaddedTagline = styled(TaglineText)`
  padding-top: 0.3em;
  padding-bottom: 0.3em;
`;

const subheaderWithTagline = ({ colour, headerText, taglineText }) => (
  <div>
    <HeaderText colour={colour}>{headerText}</HeaderText>
    <PaddedTagline colour={colour}>{taglineText}</PaddedTagline>
  </div>
);

subheaderWithTagline.propTypes = propTypes;

export default styled(subheaderWithTagline)``;
