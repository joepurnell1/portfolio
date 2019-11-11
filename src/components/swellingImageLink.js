import React from 'react';
import styled from 'styled-components';
import { string, func } from 'prop-types';

const StyledLink = styled('a')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${p => p.size};
  width: ${p => p.size};
`;

const Image = styled('img')`
  height: ${p => p.height};
  width: ${p => p.width};
  transition: height 0.25s, width 0.25s;

  &:hover {
    height: ${p => p.hoverHeight};
    width: ${p => p.hoverWidth};
  }
`;

const SwellImage = styled('img')`
  height: ${p => p.height};
  width: ${p => p.width};
  transition: height 0.25s, width 0.25s;

  ${p => p.swellOn}:hover & {
    height: ${p => p.hoverHeight};
    width: ${p => p.hoverWidth};
  }
`;

const SwellingLink = ({
  link, imageSource, imageAlt, size, hoverSize, swellOn,
}) => (
  <StyledLink
    href={link}
    size={hoverSize}
    swellOn={swellOn}
  >
    {
      swellOn
        ? (
          <SwellImage
            src={imageSource}
            alt={imageAlt}
            height={size}
            width={size}
            hoverHeight={hoverSize}
            hoverWidth={hoverSize}
            swellOn={swellOn}
          />
        )
        : (
          <Image
            src={imageSource}
            alt={imageAlt}
            height={size}
            width={size}
            hoverHeight={hoverSize}
            hoverWidth={hoverSize}
          />
        )
    }


  </StyledLink>
);

SwellingLink.propTypes = {
  link: string.isRequired,
  imageSource: string.isRequired,
  imageAlt: string.isRequired,
  size: string.isRequired,
  hoverSize: string.isRequired,
  swellOn: func,
};

SwellingLink.defaultProps = {
  swellOn: undefined,
};

export default styled(SwellingLink)``;
