import React from 'react';
import styled, { withTheme } from 'styled-components';
import ColouredContainer from '../../atoms/layout/colouredContainer';
import ColouredInfoBand from '../../organisms/colouredInfoBand';
import HeadedSection from '../../molecules/headedSection';
import Text from '../../atoms/text/text';

const PaddedContainer = styled('div')`
  max-width: 625px;
  text-align: center;
`;

const StyledText = styled(Text)`
  padding: 16px 0 0 0;
`;

export default withTheme(({ theme }) => (
  <div>
    <ColouredContainer backgroundColour={theme.Homepage.highlightedBackground}>
      <ColouredInfoBand title="Hi, I'm Joe." subtitle="(better than your average Joe)" />
    </ColouredContainer>
    <HeadedSection sectionTitle="Who am I?">
      <PaddedContainer>
        <StyledText>I’m Joe, raised in Dorset, live in London.</StyledText>
        <StyledText>
          I’m an passionate developer who loves new technologies,
          tinkering with code, and creating cool projects.
        </StyledText>
        <StyledText>As a friendly guy I’m happy to chat about any projects you have.</StyledText>
      </PaddedContainer>
    </HeadedSection>
  </div>
));
