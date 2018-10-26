import React from 'react';
import styled, { withTheme } from 'styled-components';
import ColouredContainer from '../../atoms/layout/colouredContainer';
import ColouredInfoBand from '../../organisms/colouredInfoBand';
import HeadedSection from '../../molecules/headedSection';
import Text from '../../atoms/text/text';
import ImageWithText from '../../molecules/imageWithText';
import Surprise from '../../../images/icons/surprise.svg';
import Idea from '../../../images/icons/idea.svg';
import Code from '../../../images/icons/code.svg';

const PaddedContainer = styled('div')`
  max-width: 625px;
  text-align: center;
`;

const StyledText = styled(Text)`
  padding: 16px 0 0 0;
`;

function whoAmJoe() {
  return (
    <HeadedSection sectionTitle="Who am I?">
      <PaddedContainer>
        <StyledText>I’m Joe, raised in Dorset, live in London.</StyledText>
        <StyledText>
          I’m an passionate developer who loves new technologies,
          tinkering with code, and creating cool projects.
        </StyledText>
        <StyledText>As a friendly guy I’m happy to chat about any projects you have.</StyledText>
      </PaddedContainer>
      <div>Icon made by Freepik from www.flaticon.com</div>
    </HeadedSection>
  );
}

function whatCanJoe() {
  return (
    <HeadedSection sectionTitle="What can I do?">
      <PaddedContainer>
        <ImageWithText
          imageSource={Idea}
          imageAlt="design"
          text="Work with you on growing your ideas into designs"
        />
        <ImageWithText
          imageSource={Code}
          imageAlt="code"
          text="Develop ideas to life as Mobile Apps or Websites I am also skilled in backend systems and automated testing."
        />
        <ImageWithText
          imageSource={Surprise}
          imageAlt="surprise"
          text="Surprise You"
        />
      </PaddedContainer>
    </HeadedSection>
  );
}

export default withTheme(({ theme }) => (
  <div>
    <ColouredContainer backgroundColour={theme.Homepage.highlightedBackground}>
      <ColouredInfoBand title="Hi, I'm Joe." subtitle="(better than your average Joe)" />
    </ColouredContainer>
    {whoAmJoe()}
    {whatCanJoe()}
  </div>
));
