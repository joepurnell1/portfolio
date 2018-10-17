import { string } from 'prop-types';

export default {
  imageSource: string.isRequired,
  imageAlt: string.isRequired,
  height: string,
  width: string,
};

export const defaultProps = {
  height: '42px',
  width: '42px',
};
