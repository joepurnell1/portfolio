import { bool, node, string } from 'prop-types';

export default {
  focused: bool,
  children: node.isRequired,
  boxShadow: string,
  margin: string,
  size: string,
};

export const defaultProps = {
  focused: false,
  boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.25)',
  margin: '10px',
  size: '100px',
};
