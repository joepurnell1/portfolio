import styled from 'styled-components';
import propTypes, { defaultProps } from './propTypes';

const TaglineText = styled('h4')`
  font-size: 1em;
  font-family: Notosans;
  color: ${p => (p.colour ? p.colour : p.theme.HeadedSection.headerText)};
  margin: 0;
`;

TaglineText.propTypes = propTypes;
TaglineText.defaultProps = defaultProps;

export default TaglineText;
