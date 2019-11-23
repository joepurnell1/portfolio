import React from "react"
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout"
import { Header, Text, SmallText } from "../components/typography";
import SEO from "../components/seo"
import Project from "../components/project";
import projects from '../data/projects';
import talks from '../data/talks';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 24px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: flex-start;
`;

const DescriptionContainer = styled.div`
  max-width: 500px;
  text-align: flex-start;
`;

const List = styled.ul`
  padding-inline-start: 0;
`;

const Item = styled.li`
  list-style-type: none;
  text-align: left;
  :not(:first-child) {
    margin-top: 8px;
  }
`;

const CenterItem = styled(Item)`
  display: flex;
  justify-content: center;
  padding-top: 8px;
`;

const PaddedSmallText = styled(SmallText)`
  padding-top: 8px;
`;

const SpecialLink = styled(Link)`
  font-family: Notosans;
  color: ${p => p.theme.typography.link.specialColour};
  margin: ${p => p.margin && p.margin};

  &:hover {
    background-image: linear-gradient(to right, #26ebe3cc, #26ebe380);
    background-position: 1.2em 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: -0.2em 0;
    box-shadow: inset 0 .5em 0 0 #00000000;
  }

  &:visited {
    color: ${p => p.theme.typography.link.specialColour};
  }
`;

const ColouredLink = styled(Link)`
  font-family: Notosans;
  color: ${p => p.theme.typography.link.standardColour};
  text-decoration-color: ${p => p.theme.typography.link.fancyLines[p.colourindex]};

  &:visited {
    color: ${p => p.theme.typography.link.standardColour};
    text-decoration-color: ${p => p.theme.typography.link.fancyLines[p.colourindex]};
  }

  &:hover {
    background-image: linear-gradient(to right, #f77ca0cc, #f77ca080);
    background-position: 1.2em 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: -0.2em 0;
    box-shadow: inset 0 .5em 0 0 #00000000;
  }
`;

const IndexPage = ({ data }) => {
  const blogPosts = data.allDevArticles.edges;
  return (
    <Layout shadowText="Hello&#x200b;There." title="I'm Joe">
      <SEO title="Home" />
      <Container>
        <ContentContainer>
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
      <Container>
        <ContentContainer>
          <Header>Projects</Header>
          <Text>Here&apos;s some of the things I&apos;ve been working on:</Text>
            {
              projects.slice(0, 3).map(project => (
                <Project title={project.title} key={project.title} colour={project.colour} altColour={project.altColour} linkText={project.linkText} link={project.link}>
                  {project.body()}
                </Project>
              ))
            }
            <SpecialLink to="/projects" margin="16px 0 16px 0">View All Projects</SpecialLink>
        </ContentContainer>
      </Container>
      <Container>
        <ContentContainer>
          <Header>Written Rambles</Header>
          <PaddedSmallText>Here's a few recent articles:</PaddedSmallText>
          <List>
            {
              blogPosts.map((entry, index) => (
                <Item key={entry.node.article.id}>
                  <ColouredLink to={`/blog/${entry.node.article.slug.substring(0, entry.node.article.slug.lastIndexOf('-'))}`} colourindex={index}>{entry.node.article.title}</ColouredLink>
                </Item>
              ))
            }
            <CenterItem>
              <SpecialLink to="/blog">View All Blog Posts</SpecialLink>
            </CenterItem>
          </List>
        </ContentContainer>
      </Container>
      <Container>
        <ContentContainer>
          <Header>Spoken Rambles</Header>
          <PaddedSmallText>Speaking engagements:</PaddedSmallText>
          <List>
            {
              talks.map(talk => (
                <Item key={talk.date}>
                  <Text>{`${talk.title} | ${talk.location} | ${talk.date}`}</Text>
                </Item>
              ))
            }
          </List>
        </ContentContainer>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    allDevArticles(limit: 5) {
      edges {
        node {
          article {
            id
            title
            description
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage
