import React from 'react';
import styled from 'styled-components';
import HeadedSection from '../../molecules/headedSection';
import ProjectCard from '../../molecules/projectCard';
import Text from '../../atoms/text/text';

const ProjectsContainer = styled('div')`
  display: flex;
  max-width: 1100px;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 18px;
  justify-content: center;
  border-radius: 5;
`;

const IntroContainer = styled(ProjectsContainer)`
  margin-top: 0;
  text-align: center;
  padding-left: 16px;
  padding-right: 16px;
`;

const renderProjects = () => (
  <HeadedSection sectionTitle="Projects">
    <IntroContainer>
      <Text>
        Here are some projects I&apos;ve worked on, both personal and commissioned.
      </Text>
    </IntroContainer>
    <ProjectsContainer>
      <ProjectCard
        backgroundColour="#0e9cf2"
        tags={['React Native']}
        textColour="#07659e"
        tagColour="#07659e"
        tagTextColour="#FFF"
        projectTitle="DREAMpath"
        projectText={[
          'Commissioned project integrating with Apple\'s HealthKit',
          'Using React Native, Redux, and Styled Components',
        ]}
        projectType="Commissioned"
      />

      <ProjectCard
        backgroundColour="#011627"
        tags={['React', 'GatsbyJS']}
        textColour="#07659e"
        tagColour="#0674ce"
        tagTextColour="#FFF"
        projectTitle="This Website"
        projectText={[
          'A cheeky portfolio, utilising Gatsbyjs and React with a sprinkle of more Styled Components.',
          'Feel free to have a look at the repo.',
        ]}
        href="https://github.com/joepurnell1/portfolio"
      />

      <ProjectCard
        backgroundColour="#44AF69"
        tags={['Java', 'Swift']}
        textColour="#336043"
        tagColour="#a4f2bf"
        tagTextColour="#336043"
        projectTitle="TraiNap"
        projectText={[
          'Geolocation app for train passengers worried about missing their stop.',
          'Built in Java for Android and Swift for iOS.',
        ]}
      />
    </ProjectsContainer>
  </HeadedSection>
);

export default renderProjects;
