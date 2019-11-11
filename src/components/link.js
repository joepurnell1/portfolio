import React from 'react';
import styled from 'styled-components';
import { string, node, bool } from 'prop-types';

const StyledLink = styled('a')`
  background: ${props => (props.invert ? props.theme.Link.accent : props.theme.Global.background)};
  color: ${props => (props.invert ? props.theme.Global.background : props.theme.Link.accent)};
  font-size: medium;
  font-family: Notosans;
  margin: 1px;
  padding: 0.25em 1em;
  border: 2px solid;
  border-color: ${props => (props.invert ? props.theme.Global.background : props.theme.Link.accent)};
  border-radius: 45px;
  text-decoration: none;

  &:hover {
    background: ${props => (props.invert ? props.theme.Global.background : props.theme.Link.accent)};
    color: ${props => (props.invert ? props.theme.Link.accent : props.theme.Global.background)};
    border-color: ${props => (props.invert ? props.theme.Link.accent : props.theme.Global.background)};
  }
`;

const Link = ({ href, invert, children }) => (
  <StyledLink href={href} invert={invert}>
    {children}
  </StyledLink>
);

Link.propTypes = {
  href: string.isRequired,
  children: node.isRequired,
  invert: bool,
};

Link.defaultProps = {
  invert: false,
};

export default styled(Link)``;