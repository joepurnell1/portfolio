import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { Text } from "../components/typography";
import SEO from "../components/seo";
import { Contact } from "../components/contact";
import me from "../images/me.jpg";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  /* padding-top: 42px; */
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: left;
  width: 100%;
`;

const HeaderBlock = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const DescriptionContainer = styled.div`
  max-width: 500px;
  text-align: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  padding-left: 16px;

  @media (max-width: 700px) {
    padding-left: 0;
  }
`;

const Navlink = styled(Link)`
  padding: 0;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  letter-spacing: -0.07em;
  line-height: 1;
  font-weight: bold;
  color: #011627;
  z-index: 1;
  width: 100%;
  text-align: left;
  margin-top: 16px;

  :not(last-child) {
    @media (max-width: 700px) {
      margin-bottom: 24px;
      margin-right: 0;
    }
  }

  &:hover {
    color: ${(p) => p.theme.typography.headerColour};
  }
`;

const SubHeader = styled(Link).attrs({ as: "h2" })`
  padding: 0;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  letter-spacing: -0.07em;
  line-height: 1;
  font-weight: bold;
  color: #011627;
  z-index: 1;
  width: 100%;
  text-align: left;
  margin: 0;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  font-size: 4rem;
  letter-spacing: -0.07em;
  line-height: 1;
  font-weight: bold;
  color: #011627;
  z-index: 1;
  width: 100%;
  text-align: left;

  @media (max-width: ${(p) => p.theme.breakpoints.medium}) {
    font-size: 4rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
  margin-top: 48px;
  margin-bottom: 64px;
`;

const InfoText = styled(Text)`
  font-size: 18px;
  :not(:first-child) {
    margin-top: 8px;
  }
`;

const Image = styled.img`
  height: auto;
  width: 90%;
  max-width: 175px;

  @media (max-width: 700px) {
    margin-bottom: 24px;
  }
`;

const List = styled.ul`
  margin-top: 56px;
  padding-inline-start: 0;
`;

const Item = styled.li`
  list-style-type: none;
  text-align: left;
  :not(:first-child) {
    margin-top: 8px;
  }
`;

const ColouredLink = styled(Link)`
  font-family: Notosans;
  font-weight: 700;
  font-size: 20px;
  color: ${(p) => p.theme.typography.link.standardColour};
  text-decoration-color: ${(p) =>
    p.theme.typography.link.fancyLines[p.colourindex]};

  &:visited {
    color: ${(p) => p.theme.typography.link.standardColour};
    text-decoration-color: ${(p) =>
      p.theme.typography.link.fancyLines[p.colourindex]};
  }

  &:hover {
    background-image: linear-gradient(to right, #26ebe3cc, #26ebe380);
    background-position: 1.2em 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: -0.2em 0;
    box-shadow: inset 0 0.5em 0 0 #00000000;
  }
`;

const IndexPage = ({ data }) => {
  const blogPosts = data.allDevArticles.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <ContentContainer>
          <HeaderBlock>
            <Image src={me} />
            <DescriptionContainer>
              <Title>I'm Joe</Title>
              <InfoText>I make things and ramble on about them.</InfoText>
              <Navlink to="/projects" margin="16px 0 16px 0">
                Projects
              </Navlink>
            </DescriptionContainer>
          </HeaderBlock>
          <List>
            <SubHeader as="p">Posts</SubHeader>
            {blogPosts.map((entry, index) => {
              const colourindex = index > 4 ? index % 5 : index;
              return (
                <Item key={entry.node.article.id}>
                  <ColouredLink
                    to={`/blog/${entry.node.article.slug.substring(
                      0,
                      entry.node.article.slug.lastIndexOf("-")
                    )}`}
                    colourindex={colourindex}
                  >
                    {entry.node.article.title}
                  </ColouredLink>
                </Item>
              );
            })}
          </List>
          <Contact />
        </ContentContainer>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    allDevArticles {
      edges {
        node {
          article {
            id
            title
            description
            slug
            user {
              username
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
