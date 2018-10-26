import styled from 'styled-components';
import propTypes, { defaultProps } from './propTypes';

const ColouredContainer = styled('div')`
  background: ${props => props.backgroundColour};
  display: flex;
  min-height: 400px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

ColouredContainer.propTypes = propTypes;
ColouredContainer.defaultProps = defaultProps;

export default styled(ColouredContainer)``;