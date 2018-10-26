import React from 'react';
import styled from 'styled-components';
import propTypes, { defaultProps } from './propTypes';
import Image from '../../atoms/image';
import Text from '../../atoms/text/text';

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  padding: 16px;

  @media (max-width: 400px) {
    flex-direction: column;
    padding: 16px;
    text-align: center;
  }
`;

const StyledText = styled(Text)`
  padding-left: 18px;

  @media (max-width: 400px) {
    padding-top: 8px;
    padding-left: 0;
  }
`;

const ImageWithText = ({
  imageSource, imageAlt, text, imageSize, props,
}) => (
  <Container>
    <Image
      imageSource={imageSource}
      imageAlt={imageAlt}
      height={imageSize}
      width={imageSize}
      {...props}
    />
    <StyledText>{text}</StyledText>
  </Container>
);

ImageWithText.propTypes = propTypes;
ImageWithText.defaultProps = defaultProps;

export default ImageWithText;
