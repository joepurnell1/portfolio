import { string, node, object } from 'prop-types';

export default {
  theme: object,
  sectionTitle: string,
  children: node.isRequired,
};

export const defaultProps = {
  theme: {},
  sectionTitle: '',
};
