import { string, node, bool } from 'prop-types';

export default {
  href: string.isRequired,
  children: node.isRequired,
  invert: bool,
};

export const defaultProps = {
  invert: false,
};
