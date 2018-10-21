import React from 'react';
import styled from 'styled-components';
import propTypes from './propTypes';

const StyledLink = styled('a')``;

const StyledImage = styled('img')`
  height: ${p => p.height};
  width: ${p => p.width};
  transition: height 0.25s, width 0.25s;

  &:hover {
    height: ${p => p.hoverHeight};
    width: ${p => p.hoverWidth};
  }
`;

const SwellingLink = ({
  link, imageSource, imageAlt, size, hoverSize,
}) => (
  <StyledLink href={link}>
    <StyledImage
      src={imageSource}
      alt={imageAlt}
      height={size}
      width={size}
      hoverHeight={hoverSize}
      hoverWidth={hoverSize}
    />
  </StyledLink>
);

SwellingLink.propTypes = propTypes;

export default styled(SwellingLink)``;
