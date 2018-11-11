import styled from 'styled-components';
import propTypes, { defaultProps } from './propTypes';

const HeaderText = styled('h2')`
  font-size: 4em;
  font-family: Poppins;
  color: ${p => p.colour};
  margin: 0;
  line-height: 1em;

  @media (max-width: 700px) {
    text-align: center;
  }
`;

HeaderText.propTypes = propTypes;
HeaderText.defaultProps = defaultProps;

export default HeaderText;
