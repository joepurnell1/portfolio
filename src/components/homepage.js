import React from 'react';
import styled, { withTheme } from 'styled-components';
import LinkBand from './linkBand';
import { Header, Text, SmallText } from './typography';
import ProjectCard from './projectCard';

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
        <Header>Hello, I&apos;m Joe</Header>
        <SmallText>
          (better than your average Joe)
        </SmallText>
        <DescriptionContainer>
          <Text>
            Javascript Engineer
          </Text>
          <Text>
            Raised in Dorset. Live in London.
          </Text>
          <Text>
          I make things and ramble on about them.
          </Text>
        </DescriptionContainer>
      </ContentContainer>
    </Container>
  );
}

function renderProjects(projects) {
  return (
    <Container>
      <ContentContainer>
        <Header>Projects</Header>
        <Text>Here&apos;s some of the things I&apos;ve been working on:</Text>
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

function renderTalks(talks) {
  const List = styled.ul``;
  const Item = styled.li`
    list-style-type: none;
    text-align: center;
    :not(:first-child) {
      margin-top: 8px;
    }
  `;

  return (
    <Container>
      <ContentContainer>
        <Header>Talks</Header>
        <List>
          {
            talks.map(talk => (
              <Item>
                <Text>{`${talk.title} | ${talk.location} | ${talk.date}`}</Text>
              </Item>
            ))
          }
        </List>
      </ContentContainer>
    </Container>
  );
}

export default withTheme(({ theme, projects, talks }) => (
  <div>
    {renderIntro(theme)}
    {renderProjects(projects)}
    {renderTalks(talks)}
    <PatternedContainer
      id="sayHi"
      backgroundColour={theme.Homepage.highlightedBackground}
    >
      <Header colour="#fff">Get in touch</Header>
      <Text colour="#fff">
            Here&apos;s all the links...
      </Text>
      <LinkBand />
    </PatternedContainer>
  </div>
));
