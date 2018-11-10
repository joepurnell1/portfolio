import styled from 'styled-components';
import propTypes, { defaultProps } from './propTypes';

const Text = styled('p')`
  font-size: 1.2em;
  font-weight: ${p => (p.strong ? p.theme.Global.strongTextWeight : 0)};
  font-family: Notosans;
  color: ${p => p.theme.Global.textColour};
  margin: 0;
`;

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
