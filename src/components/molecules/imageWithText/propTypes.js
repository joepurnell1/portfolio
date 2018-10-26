import { string } from 'prop-types';

export default {
  imageSource: string.isRequired,
  imageAlt: string.isRequired,
  imageSize: string,
  text: string.isRequired,
};

export const defaultProps = {
  imageSize: '50px',
};
