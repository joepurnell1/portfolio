import styled from 'styled-components';
import propTypes, { defaultProps } from './propTypes';

const Text = styled('p')`
  font-size: 1.45em;
  color: ${p => p.theme.Global.textColour};
  margin: 0;
`;

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
