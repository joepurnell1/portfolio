import React from 'react';
import styled from 'styled-components';
import { Header, Text, SmallText } from './typography';
import LinkBand from './linkBand';

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  text-align: flex-start;
`;

export const Contact = () => (
  <ContentContainer>
    {/* <Text as="h2">Here's all the links...</Text> */}
    <LinkBand />
  </ContentContainer>
);
