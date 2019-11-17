import styled from 'styled-components';
import { Text } from './typography';

export default styled(Text).attrs(() => ({
  as: 'a'
}))`
  color: ${p => p.theme.typography.textColour};
  margin: ${p => p.margin && p.margin};

  &:hover {
    color: ${p => p.theme.typography.headerColour};
  }
`;
