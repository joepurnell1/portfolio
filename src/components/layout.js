import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { string, node, bool } from 'prop-types';
import Link from './atoms/link';
import Tagline from './atoms/text/tagline';
import theme from '../styles/theme';
import '../styles/global.css';

const Container = styled('header')`
  background: ${props => (props.invert ? props.theme.Header.accent : props.theme.Global.background)};
  display: flex;
  justify-content: flex-end;
  padding: 4px;
  padding-right: 16px;
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

const Layout = ({ children, headerLink, invert }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Container invert={invert}>
        <StyledLink href={headerLink} invert={invert}>Say Hi</StyledLink>
      </Container>
      {children}
      <FooterContainer
        colour={theme.Global.textColour}
      >
        <FooterText colour={theme.Global.background}>
          Joe Purnell &copy; 2018 | Icons by Freepik from www.flaticon.com
        </FooterText>
      </FooterContainer>
    </div>
  </ThemeProvider>
);

Layout.propTypes = {
  headerLink: string.isRequired,
  children: node.isRequired,
  invert: bool,
};

Layout.defaultProps = {
  invert: false,
};

export default Layout;
