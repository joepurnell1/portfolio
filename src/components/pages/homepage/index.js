import React from 'react';
import styled, { withTheme } from 'styled-components';
import ColouredContainer from '../../atoms/layout/colouredContainer';
import Text from '../../atoms/text/text';
import ImageWithText from '../../molecules/imageWithText';
import HeadedSection from '../../molecules/headedSection';
import ColouredInfoBand from '../../organisms/colouredInfoBand';
import Projects from '../../organisms/projects';
import SayHi from '../../organisms/sayHi';
import Surprise from '../../../images/icons/surprise.svg';
import Idea from '../../../images/icons/idea.svg';
import Code from '../../../images/icons/code.svg';
import Web from '../../../images/tech/web.svg';
import App from '../../../images/tech/app.svg';
import Server from '../../../images/tech/server.svg';

const RestrictedContainer = styled('div')`
  max-width: 625px;
  text-align: center;
`;

const StyledText = styled(Text)`
  padding: 16px 0 0 0;
`;

const PaddedColouredContainer = styled(ColouredContainer)`
  margin-top: 50px;
`;

function renderWhoAmJoe() {
  return (
    <HeadedSection sectionTitle="Who am I?">
      <RestrictedContainer>
        <StyledText>I’m Joe, raised in Dorset, live in London.</StyledText>
        <StyledText>
          I’m an passionate developer who loves new technologies,
          tinkering with code, and creating cool projects.
        </StyledText>
        <StyledText>As a friendly guy I’m happy to chat about any projects you have.</StyledText>
      </RestrictedContainer>
    </HeadedSection>
  );
}

function renderWhatCanJoe() {
  return (
    <HeadedSection sectionTitle="What can I do?">
      <RestrictedContainer>
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
      </RestrictedContainer>
    </HeadedSection>
  );
}

function renderWhatCanJoeMake() {
  return (
    <HeadedSection sectionTitle="What can I make in?">
      <RestrictedContainer>
        <StyledText strong>
          Rather than boring you with a giant list of technologies heres the headlines:
        </StyledText>
      </RestrictedContainer>
      <RestrictedContainer>
        <ImageWithText
          imageSource={Web}
          imageAlt="frontend"
          text="My frontend world centers around React based technologies."
        />
        <ImageWithText
          imageSource={App}
          imageAlt="mobile-apps"
          text="Fancy apps built mainly using React Native (though I have also used Java and Swift)."
        />
        <ImageWithText
          imageSource={Server}
          imageAlt="backend"
          text="Backend experience started in the Java world expanding from there."
        />
        <StyledText strong>
          This isn&apos;t where my learning ends however, I am quite adaptable
        </StyledText>
      </RestrictedContainer>
    </HeadedSection>
  );
}

export default withTheme(({ theme }) => (
  <div>
    <ColouredContainer backgroundColour={theme.Homepage.highlightedBackground}>
      <ColouredInfoBand title="Hi, I'm Joe." subtitle="(better than your average Joe)" />
    </ColouredContainer>
    {renderWhoAmJoe()}
    {renderWhatCanJoe()}
    {renderWhatCanJoeMake()}
    <Projects />
    <PaddedColouredContainer backgroundColour={theme.Homepage.highlightedBackground}>
      <SayHi />
    </PaddedColouredContainer>
  </div>
));
