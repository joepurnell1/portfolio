import React from 'react';
import styled, { withTheme } from 'styled-components';
import propTypes, { defaultProps } from './propTypes';
import ColouredContainer from '../../atoms/layout/colouredContainer';
import Header from '../../atoms/text/subheader';

const Container = styled(ColouredContainer)`
  justify-content: flex-start;
  padding: 50px 0 0 0;
  min-height: 250px;
  margin-top: 36px;
`;

const HeadedSection = ({ theme, sectionTitle, children }) => (
  <Container backgroundColour={theme.Global.background}>
    <Header colour={theme.HeadedSection.headerText}>{sectionTitle}</Header>
    {children}
  </Container>
);

HeadedSection.propTypes = propTypes;
HeadedSection.defaultProps = defaultProps;

export default withTheme(HeadedSection);
