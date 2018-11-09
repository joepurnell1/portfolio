import styled from 'styled-components';
import propTypes, { defaultProps } from './propTypes';

const HeaderText = styled('h1')`
  font-size: 5.5em;
  font-family: Poppins;
  color: ${p => p.colour};
  margin: 0;
  line-height: 1em;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

HeaderText.propTypes = propTypes;
HeaderText.defaultProps = defaultProps;

export default HeaderText;
