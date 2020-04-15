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
  padding-top: 36px;
`;

export const Title = styled.h1`
  margin: 0 16px;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 6rem;
  letter-spacing: -0.07em;
  line-height: 1;
  font-weight: bold;
  color: #011627;
  z-index: 1;
  width: 100%;
  text-align: left;

  @media (max-width: ${p=> p.theme.breakpoints.medium}) {
    font-size: 4rem;
  }
`;

const Content = styled.main`
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
        {/* <Header shadowText={shadowText} title={title} /> */}
        <Content>
          <header style={{ maxWidth: '600px', alignSelf: 'center', }}><Title>{title}</Title></header>
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
