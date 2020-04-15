import React from 'react';
import styled from 'styled-components';
import { SmallText } from './typography';
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
    <CopyrightContainer colour={theme.Global.textColour}>
      <SmallText colour={theme.Global.background}>
        {`Joe Purnell © ${new Date().getFullYear()}`}
      </SmallText>
    </CopyrightContainer>
  </Container>
);
