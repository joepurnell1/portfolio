import React from 'react';
import styled from 'styled-components';
import HeadedSection from '../../molecules/headedSection';
import Header from '../../atoms/text/header';
import Text from '../../atoms/text/text';
import Github from '../../../images/social/github.svg';
import Trainap from '../../../images/projects/trainap.png';
import Doctor from '../../../images/projects/doctor.svg';

const Container = styled('div')`
  display: flex;
  max-width: 700px;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 18px;
  justify-content: center;
  border-radius: 5;
`;

const IntroContainer = styled(Container)`
  margin-top: 0;
  text-align: center;
`;

const ProjectContainer = styled('div')`
  display: flex;
  flex: 1;
  background-color: ${p => p.colour};
  width: 100%;
  min-width: 350px;
  max-width: 350px;
  min-height: 450px;
  max-height: 450px;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;

const FullWidthContainer = styled(ProjectContainer)`
  flex: 2;
  max-width: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
    max-width: 350px;
  }
`;

const SwellingHeader = styled(Header)`
  transition: font-size 0.25s;
  padding-top: ${p => p.pad && '32px'};
  font-size: 3em;

  ${p => p.swellOn}:hover & {
    font-size: 3.25em;
  }
`;

const ProjectText = styled(Text)`
  padding: 16px 28px 0 28px;
  font-size: 18px;
  text-align: center;
  color: #fff;
  transition: font-size 0.25s;
`;

const UnpaddedText = styled(ProjectText)`
  padding-top: 0;
`;

const SwellText = styled(Text)`
  padding: 0 28px 0 28px;
  font-size: 18px;
  text-align: center;
  color: #fff;
  transition: font-size 0.25s;
`;

const BorderedText = styled('p')`
  color: #ffffff;
  font-size: 1.25em;
  font-family: Notosans;
  margin: 1px;
  padding: 0.25em 1em;
  border: 2px solid;
  border-color: #ffffff;
  border-radius: 45px;
  text-decoration: none;
  transition: font-size 0.25s;

  ${FullWidthContainer}:hover & {
    font-size: 1.35em;
  }
`;

const PaddedContainer = styled('div')`
  display: flex;
  padding-top: 20px;
  justify-content: flex-end;
  align-items: flex-end;
  flex-grow: 1;
  height: 100%;
`;

const LinkContainer = styled('a')`
  text-decoration: none;
`;

const SwellImage = styled('img')`
  height: ${p => p.height};
  width: ${p => p.width};
  transition: height 0.25s, width 0.25s;

  ${p => p.swellOn}:hover & {
    height: ${p => p.hoverHeight};
    width: ${p => p.hoverWidth};
  }
`;

const renderProjects = () => (
  <HeadedSection sectionTitle="Projects">
    <IntroContainer>
      <Text>
        Here are some projects I&apos;ve worked on, both personal and commissioned.
      </Text>
    </IntroContainer>
    <Container>
      <ProjectContainer colour="#44AF69">
        <SwellingHeader strong swellOn={ProjectContainer} pad>TraiNap</SwellingHeader>
        <UnpaddedText>An app for train passengers worried about missing their stop.</UnpaddedText>
        <ProjectText>Sole developer</ProjectText>
        <ProjectText>Built in Java for Android and Swift for iOS</ProjectText>
        <PaddedContainer>
          <SwellImage
            swellOn={ProjectContainer}
            src={Trainap}
            alt="trainap"
            width="auto"
            height="190px"
            hoverHeight="200px"
            hoverWidth="auto"
          />
        </PaddedContainer>
      </ProjectContainer>

      <ProjectContainer colour="#0e9cf2">
        <SwellImage
          swellOn={ProjectContainer}
          src={Doctor}
          alt="doctor"
          width="auto"
          height="125px"
          hoverHeight="135px"
          hoverWidth="auto"
        />
        <SwellingHeader strong swellOn={ProjectContainer}>DREAMpath</SwellingHeader>
        <UnpaddedText>Commissioned project integrating with Apple&apos;s HealthKit</UnpaddedText>
        <ProjectText>Lead developer</ProjectText>
        <ProjectText>Using React Native, Redux, and Styled Components</ProjectText>
      </ProjectContainer>

      <LinkContainer href="https://github.com/joepurnell1/portfolio">
        <FullWidthContainer colour="#011627">
          <SwellingHeader strong swellOn={FullWidthContainer}>This Website</SwellingHeader>
          <SwellText textColour="#067BC2" swellOn={FullWidthContainer}>
            A cheeky portfolio, utilising Gatsbyjs and
             React with a sprinkle of more Styled Components
          </SwellText>
          <SwellImage
            swellOn={FullWidthContainer}
            src={Github}
            alt="website github"
            width="100px"
            height="100px"
            hoverHeight="110px"
            hoverWidth="110px"
          />
          <BorderedText>See project Repo</BorderedText>
        </FullWidthContainer>
      </LinkContainer>
    </Container>
  </HeadedSection>
);

export default renderProjects;
