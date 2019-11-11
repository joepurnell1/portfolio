import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { string, node } from 'prop-types';
import Link from './link';
import Tagline from './tagline';
import theme from '../styles/theme';

const Container = styled('header')`
  background: ${props => (props.invert ? props.theme.Header.accent : props.theme.Global.background)};
  display: flex;
  justify-content: flex-end;
  padding: 2px;
  padding-right: 16px;
  box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 6px 0px;
`;

const FooterContainer = styled('footer')`
  justify-content: center;
  align-items: center;
  background-color: ${p => p.colour};
  display: flex;
  padding: 4px;
  padding-right: 16px;
`;

const StyledLink = styled(Link)`
  margin-right: 2em;
  align-self: flex-end;
`;

const FooterText = styled(Tagline)`
  font-size: 0.75em;
`;

const date = new Date();

const renderHelmet = () => (
  <Helmet>
    <title>Personal Website and Portfolio for Joe Purnell</title>
    <meta charset="UTF-8" />
    <meta name="description" content="Have a glimpse into the work of fullstack developer, Joe Purnell." />
    <meta name="keywords" content="portfolio, fullstack, developer, web, mobile, apps, software" />
    <meta name="author" content="Joe Purnell" />
    <meta name="og:title" content="Personal Website and Portfolio for Joe Purnell" />
    <meta name="og:site_name" content="Joe Purnell's Portfolio" />
    <meta name="og:description" content="Have a glimpse into the work of fullstack developer, Joe Purnell." />
    <meta name="lang" content="en" />
    <meta name="xml:lang" content="en" />
  </Helmet>
);

const Layout = ({
  children, headerLink,
}) => (
  <ThemeProvider theme={theme}>
    <div>
      {renderHelmet()}
      {headerLink && (
        <Container invert>
          <StyledLink href={headerLink}>Say Hi</StyledLink>
        </Container>
      )
      }
      {children}
      {/* <PatternedContainer
        id="sayHi"
        backgroundColour={theme.Homepage.highlightedBackground}
      >
        <NewHeader colour="#fff">Get in touch</NewHeader>
        <NewText colour="#fff">
              Here&apos;s all the links...
        </NewText>
        <LinkBand />
      </PatternedContainer> */}
      <FooterContainer
        colour={theme.Global.textColour}
      >
        <FooterText colour={theme.Global.background}>
          {`Joe Purnell © ${date.getFullYear()} | Icons by Freepik from www.flaticon.com`}
        </FooterText>
      </FooterContainer>
    </div>
  </ThemeProvider>
);

Layout.propTypes = {
  headerLink: string,
  children: node.isRequired,
};

Layout.defaultProps = {
  invert: false,
  headerLink: '',
};

export default Layout;
