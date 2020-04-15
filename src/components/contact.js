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
  margin-bottom: 32px;
`;

export const Contact = () => (
  <ContentContainer>
    <Header as="h2" colour="#011627">Get in touch</Header>
    <Text>Here's all the links...</Text>
    <LinkBand />
  </ContentContainer>
);
