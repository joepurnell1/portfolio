import { number, node } from 'prop-types';

export default {
  maxWidth: number,
  children: node.isRequired,
};

export const defaultProps = {
  maxWidth: '400px',
};
