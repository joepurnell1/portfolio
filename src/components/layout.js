import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { string, node, bool } from 'prop-types';
import Link from './atoms/link';
import theme from '../styles/theme';
import '../styles/global.css';

const Container = styled.div`
  background: ${props => (props.invert ? props.theme.Header.accent : props.theme.Header.background)};
  margin-bottom: 6px;
  padding-bottom: 4px;
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  margin-right: 2em;
  align-self: flex-end;
`;

const Layout = ({ children, headerLink, invert }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Container invert={invert}>
        <StyledLink href={headerLink} invert={invert}>Say Hi</StyledLink>
      </Container>
      {children}
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
