import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const StyledImage = styled('img')`
  height: ${p => p.height};
  width: ${p => p.width};
`;

const Image = ({
  imageSource, imageAlt, height, width, props,
}) => (
  <StyledImage
    src={imageSource}
    alt={imageAlt}
    height={height}
    width={width}
    {...props}
  />
);

Image.propTypes = {
  imageSource: string.isRequired,
  imageAlt: string.isRequired,
  height: string,
  width: string,
};

Image.defaultProps = {
  height: '42px',
  width: '42px',
};

export default styled(Image)``;
