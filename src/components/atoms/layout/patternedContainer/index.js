import styled from 'styled-components';
import propTypes, { defaultProps } from './propTypes';

const PatternedContainer = styled('div')`
  display: flex;
  min-height: 400px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e84855;
`;

PatternedContainer.propTypes = propTypes;
PatternedContainer.defaultProps = defaultProps;

export default styled(PatternedContainer)``;
