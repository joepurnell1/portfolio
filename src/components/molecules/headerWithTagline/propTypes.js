import { string } from 'prop-types';

export default {
  headerText: string.isRequired,
  taglineText: string.isRequired,
  colour: string,
};

export const defaultProps = {
  colour: '#FFFFFF',
};
