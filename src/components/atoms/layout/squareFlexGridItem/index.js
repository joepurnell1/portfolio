import React from 'react';
import styled from 'styled-components';
import propTypes, { defaultProps } from './propTypes';

const Container = styled('div')`
  box-shadow: ${p => p.boxShadow};
  margin: ${p => p.margin};
  align-items: center;
  justify-content: center;
  display: flex;
  height: ${p => p.size};
  width: ${p => p.size};
  order: ${p => (p.focused ? 0 : 1)};
`;

const squareFlexGridItem = ({
  children, focused, size, props, boxShadow, margin,
}) => (
  <Container
    focused={focused}
    size={size}
    boxShadow={boxShadow}
    margin={margin}
    {...props}
  >
    {children}
  </Container>
);

squareFlexGridItem.propTypes = propTypes;
squareFlexGridItem.defaultProps = defaultProps;

export default squareFlexGridItem;
