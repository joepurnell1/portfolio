import styled from 'styled-components';
import propTypes, { defaultProps } from './propTypes';

const HeaderText = styled('h1')`
  font-size: 52px;
  font-family: Poppins;
  color: ${p => (p.theme.HeadedSection ? p.theme.HeadedSection.headerText : p.colour)};
  margin: 0;
  line-height: 1em;

  @media (max-width: 700px) {
    text-align: center;
  }
`;

HeaderText.propTypes = propTypes;
HeaderText.defaultProps = defaultProps;

export default HeaderText;
