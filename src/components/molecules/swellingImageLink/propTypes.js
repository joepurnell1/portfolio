import { string, func } from 'prop-types';

export default {
  link: string.isRequired,
  imageSource: string.isRequired,
  imageAlt: string.isRequired,
  size: string.isRequired,
  hoverSize: string.isRequired,
  swellOn: func,
};
