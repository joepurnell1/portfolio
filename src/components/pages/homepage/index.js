import React from 'react';
import styled, { withTheme } from 'styled-components';
import LinkBand from '../../linkBand';
import { Header as NewHeader, Text as NewText, SmallText } from '../../typography';
import ProjectCard from '../../projectCard';
import { projects } from './data';

const PatternedContainer = styled('div')`
  display: flex;
  min-height: 400px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e84855;
  margin-top: 50px;
  min-height: 270px;
`;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 56px;
  padding-left: 16px;
  padding-right: 16px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const DescriptionContainer = styled.div`
  margin-top: 32px;
  max-width: 500px;
  text-align: flex-start;
`;

const ProjectsContainer = styled('div')`
  display: flex;
  max-width: 1100px;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
  justify-content: center;
`;

function renderIntro() {
  return (
    <Container>
      <ContentContainer>
        <NewHeader>Hello, I&apos;m Joe</NewHeader>
        <SmallText>
          (better than your average Joe)
        </SmallText>
        <DescriptionContainer>
          <NewText>
            Javascript Engineer
          </NewText>
          <NewText>
            Raised in Dorset. Live in London.
          </NewText>
          <NewText>
          I make things and ramble on about them.
          </NewText>
        </DescriptionContainer>
      </ContentContainer>
    </Container>
  );
}

function renderProjects() {
  return (
    <Container>
      <ContentContainer>
        <NewHeader>Projects</NewHeader>
        <NewText>Here&apos;s some of the things I&apos;ve been working on:</NewText>
        <ProjectsContainer>
          {
            projects.map(project => (
              <ProjectCard
                key={project.projectTitle}
                backgroundColour={project.backgroundColour}
                tags={project.tags}
                textColour={project.textColour}
                tagColour={project.tagColour}
                tagTextColour={project.tagTextColour}
                projectTitle={project.projectTitle}
                projectText={project.projectText}
                projectType={project.projectType}
              />
            ))
          }
        </ProjectsContainer>
      </ContentContainer>
    </Container>
  );
}

export default withTheme(({ theme }) => (
  <div>
    {renderIntro(theme)}
    {renderProjects()}
    <PatternedContainer
      id="sayHi"
      backgroundColour={theme.Homepage.highlightedBackground}
    >
      <NewHeader colour="#fff">Get in touch</NewHeader>
      <NewText colour="#fff">
            Here&apos;s all the links...
      </NewText>
      <LinkBand />
    </PatternedContainer>
  </div>
));
