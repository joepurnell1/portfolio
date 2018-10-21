import { string, object } from 'prop-types';

export default {
  title: string,
  subtitle: string,
  theme: object,
};

export const defaultProps = {
  title: '',
  subtitle: '',
  theme: {},
};
