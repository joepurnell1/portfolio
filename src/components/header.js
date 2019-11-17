import React from "react"
import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 12px;
`;

const ShadowText = styled.h1`
  font-size: 18vw;
  letter-spacing: -0.05em;
  font-family: 'Poppins', sans-serif;
  color: #f77ca099;
  text-shadow: -0.08em 0 0 #26ebe380;
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 24px 0 0 0;

  z-index: -1;
  line-height: 0.8;

  @media (max-width: ${p=> p.theme.breakpoints.small}) {
    font-size: 24vw;
  }

  @media (min-width: ${p=> p.theme.breakpoints.medium}) {
    font-size: 26vw;
    padding-top: 42px;
  }

  @media (min-width: ${p=> p.theme.breakpoints.large}) {
    font-size: 200px;
  }
`;

export default ({ shadowText }) => (
  <Container>
    <ShadowText>
      { shadowText }
    </ShadowText>
  </Container>
);
