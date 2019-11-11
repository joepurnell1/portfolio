import styled from 'styled-components';
import { string } from 'prop-types';

const TaglineText = styled('h4')`
  font-size: 1em;
  font-family: Notosans;
  color: ${p => (p.colour ? p.colour : p.theme.HeadedSection.headerText)};
  margin: 0;
`;


TaglineText.propTypes = {
  colour: string,
};

TaglineText.defaultProps = {
  colour: '#FFFFFF',
};

export default TaglineText;
