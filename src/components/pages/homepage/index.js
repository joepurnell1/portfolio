import React from 'react';
import styled, { withTheme } from 'styled-components';
import Text from '../../atoms/text/text';
import PatternedContainer from '../../atoms/layout/patternedContainer';
import Projects from '../../organisms/projects';
import SayHi from '../../organisms/sayHi';
import LinkBand from '../../molecules/linkBand';
import Header from '../../atoms/text/header';
import TaglineText from '../../atoms/text/tagline';

const PaddedTagline = styled(TaglineText)`
  padding-top: 0.7em;
`;

const StyledText = styled(Text)`
  padding: 16px 0 0 0;

  @media (max-width: 420px) {
    padding: 16px 8px 0 8px;
  }
`;

const PaddedPatternedContainer = styled(PatternedContainer)`
  margin-top: 50px;
  padding: 50px 0 50px 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 56px;
`;

const HeaderContentParent = styled.div`
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
`;

const HeaderContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const DescriptionContainer = styled.div`
  max-width: 500px;
  text-align: flex-start;
`;

function renderIntro(theme) {
  return (
    <HeaderContainer>
      <HeaderContentParent>
        <HeaderContentContainer>
          <Header>{'Hi, I\'m Joe 🙋‍♂️'}</Header>
          <PaddedTagline colour={theme.Header.accent}>(better than your average Joe)</PaddedTagline>
          <DescriptionContainer>
            <StyledText>I’m Joe, raised in Dorset, live in London.</StyledText>
            <StyledText>
              I’m an passionate developer who loves new technologies,
              tinkering with code, and creating cool projects.
            </StyledText>
            <StyledText>
              As a friendly guy I’m happy to chat about any projects you have.
            </StyledText>
          </DescriptionContainer>
          <LinkBand />
        </HeaderContentContainer>
      </HeaderContentParent>
    </HeaderContainer>
  );
}

export default withTheme(({ theme }) => (
  <div>
    {renderIntro(theme)}
    <Projects />
    <PaddedPatternedContainer backgroundColour={theme.Homepage.highlightedBackground}>
      <SayHi />
    </PaddedPatternedContainer>
  </div>
));
