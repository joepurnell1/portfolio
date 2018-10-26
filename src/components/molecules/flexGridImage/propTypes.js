import { string } from 'prop-types';

export default {
  imageSource: string.isRequired,
  imageAlt: string.isRequired,
  imageSize: string,
  containerSize: string,
};

export const defaultProps = {
  imageSize: '125px',
  containerSize: '150px',
};
