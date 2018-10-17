import React from 'react';
import styled from 'styled-components';
import propTypes, { defaultProps } from './propTypes';

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

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default styled(Image)``;
