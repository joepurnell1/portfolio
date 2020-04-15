import React from "react"
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project";
import projects from '../data/projects';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 32px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: flex-start;
  max-width: 600px;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 6rem;
  letter-spacing: -0.07em;
  line-height: 1;
  font-weight: bold;
  color: #011627;
  z-index: 1;
  width: 100%;
  text-align: left;

  @media (max-width: ${p=> p.theme.breakpoints.medium}) {
    font-size: 4rem;
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Container>
        <ContentContainer>
        <Title>Things I&apos;ve been working on</Title>
            {
              projects.map(project => (
                <Project title={project.title} colour={project.colour} altColour={project.altColour} linkText={project.linkText} link={project.link}>
                  {project.body()}
                </Project>
              ))
            }
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
          }
        }
      }
    }
  }
`;

export default IndexPage
