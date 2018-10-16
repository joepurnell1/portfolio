import styled from 'styled-components';
import propTypes, { defaultProps } from './propTypes';

const HeaderText = styled('h1')`
  font-size: 4em;
  color: ${p => p.colour};
  margin: 0;
`;

HeaderText.propTypes = propTypes;
HeaderText.defaultProps = defaultProps;

export default HeaderText;
