import React from 'react';
import styled from 'styled-components';
import propTypes from './propTypes';
import HeaderText from '../../atoms/text/header';
import TaglineText from '../../atoms/text/tagline';

const headerWithTagline = ({ colour, headerText, taglineText }) => (
  <div>
    <HeaderText colour={colour}>{headerText}</HeaderText>
    <TaglineText colour={colour}>{taglineText}</TaglineText>
  </div>
);

headerWithTagline.propTypes = propTypes;

export default styled(headerWithTagline)``;
