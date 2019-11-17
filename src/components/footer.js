import React from 'react';
import styled from 'styled-components';
import { Header, Text, SmallText } from './typography';
import LinkBand from './linkBand';
import theme from './theme';

const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  box-sizing: border-box;
`;

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: flex-start;
  margin-bottom: 32px;
`;

const CopyrightContainer = styled.div`
  justify-content: center;
  align-items: center;
  background-color: ${p => p.colour};
  display: flex;
  width: 100%;
  margin-top: 32px;
`;

export default () => (
  <Container>
    <ContentContainer>
      <Header>Get in touch</Header>
      <Text>Here's all the links...</Text>
      <LinkBand />
    </ContentContainer>
    <CopyrightContainer colour={theme.Global.textColour}>
      <SmallText colour={theme.Global.background}>
        {`Joe Purnell © ${new Date().getFullYear()}`}
      </SmallText>
    </CopyrightContainer>
  </Container>
);
