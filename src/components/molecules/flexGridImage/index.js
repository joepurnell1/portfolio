import React from 'react';
import propTypes, { defaultProps } from './propTypes';
import SquareFlexContainer from '../../atoms/layout/squareFlexGridItem';
import Image from '../../atoms/image';

const flexGridImage = ({
  containerSize, imageSize, imageSource, imageAlt,
}) => (
  <SquareFlexContainer
    size={containerSize}
  >
    <Image
      imageSource={imageSource}
      imageAlt={imageAlt}
      height={imageSize}
      width={imageSize}
    />
  </SquareFlexContainer>
);

flexGridImage.propTypes = propTypes;
flexGridImage.defaultProps = defaultProps;

export default flexGridImage;
