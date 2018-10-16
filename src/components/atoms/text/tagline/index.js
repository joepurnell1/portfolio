import styled from 'styled-components';
import propTypes, { defaultProps } from './propTypes';

const TaglineText = styled('h4')`
  font-size: 1em;
  text-align: center;
  color: ${p => p.color};
  margin: 0;
`;

TaglineText.propTypes = propTypes;
TaglineText.defaultProps = defaultProps;

export default TaglineText;
