import React from 'react';
import styled from 'styled-components';
import propTypes, { defaultProps } from './propTypes';

const GridContainer = styled('div')`
  display: flex;
  max-width: ${p => p.maxWidth && p.maxWidth};
  flex-wrap: wrap;
  justify-content: center;
`;

const FlexGridContainer = ({ children, maxWidth, props }) => (
  <GridContainer
    maxWidth={maxWidth}
    {...props}
  >
    {children}
  </GridContainer>
);

FlexGridContainer.propTypes = propTypes;
FlexGridContainer.defaultProps = defaultProps;

export default FlexGridContainer;
