import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../style/theme';
import Link from '../components/atoms/link';

const StyledDiv = styled.div`
  color: #BADA55;
`;

export default () => (
  <ThemeProvider theme={theme}>
    <div>
      <StyledDiv>Hello world!</StyledDiv>
    </div>
  </ThemeProvider>
);
