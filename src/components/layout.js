import React from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./theme";
import * as fonts from '../fonts';
import PropTypes from "prop-types"
import Footer from "./footer";
import Header from "./header"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Notosans';
    src:
      local('Notosans'), url('${fonts.Notosans}') format('woff');
  }
  @font-face {
    font-family: 'Poppins';
    src:
      local('Poppins'), url('${fonts.Poppins}') format('woff');
  }
  body {
    margin: 0;
    padding: 0;
  }
  html {
    margin: 0;
    padding: 0;
  }
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 6rem;
  letter-spacing: -0.07em;
  line-height: 1;
  font-weight: bold;
  color: #011627;
  z-index: 1;
  width: 90%;
  text-align: center;
  margin-top: 0;

  @media (max-width: ${p=> p.theme.breakpoints.medium}) {
    font-size: 1.75rem;
    margin-top: 15px;
  }

  @media (min-width: ${p=> p.theme.breakpoints.medium}) {
    font-size: 2rem;
  }

  @media (min-width: ${p=> p.theme.breakpoints.large}) {
    font-size: 4rem;
    width: 80%
  }
`;

const Content = styled.main`
  margin-top: -42px;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

const Layout = ({ children, shadowText, title }) => {
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <GlobalStyle />
        <Header shadowText={shadowText} title={title} />
        <Content>
          <Title>{title}</Title>
            {children}
        </Content>
        <Footer />
      </Page>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
