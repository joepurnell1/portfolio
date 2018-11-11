import React from 'react';
import styled from 'styled-components';
import propTypes from './propTypes';
import HeaderText from '../../atoms/text/header';
import TaglineText from '../../atoms/text/tagline';

const PaddedTagline = styled(TaglineText)`
  padding-top: 0.7em;
`;

const headerWithTagline = ({ colour, headerText, taglineText }) => (
  <div>
    <HeaderText colour={colour}>{headerText}</HeaderText>
    <PaddedTagline colour={colour}>{taglineText}</PaddedTagline>
  </div>
);

headerWithTagline.propTypes = propTypes;

export default styled(headerWithTagline)``;
