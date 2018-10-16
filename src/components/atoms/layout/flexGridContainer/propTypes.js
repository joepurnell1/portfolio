import { string, node } from 'prop-types';

export default {
  maxWidth: string,
  children: node.isRequired,
};

export const defaultProps = {
  maxWidth: '400px',
};
