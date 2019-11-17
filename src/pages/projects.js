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
`;

const IndexPage = ({ data }) => {
  return (
    <Layout shadowText="Projects" title="Some things I&apos;ve been working on:">
      <SEO title="Projects" />
      <Container>
        <ContentContainer>
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
