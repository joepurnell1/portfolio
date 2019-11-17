import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  /* margin-top: 24px; */
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
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
  padding-bottom: 16px;
  margin-top: 0;
`;

const SpecialLink = styled.a`
  font-family: Notosans;
  color: ${p => p.theme.typography.link.specialColour};
  font-weight: ${p => p.theme.typography.heavyWeight};
  &:hover {
    color: ${p => p.theme.typography.link.specialHoverColour};
  }
`;

const ColouredLink = styled(Link)`
  font-family: Notosans;
  font-weight: 700;
  font-size: 18px;
  color: ${p => p.theme.typography.link.standardColour};
  text-decoration-color: ${p =>
    p.theme.typography.link.fancyLines[p.colourindex]};

  &:visited {
    color: ${p => p.theme.typography.link.standardColour};
    text-decoration-color: ${p =>
      p.theme.typography.link.fancyLines[p.colourindex]};
  }

  &:hover {
    background-image: linear-gradient(to right, #26ebe3cc, #26ebe380);
    background-position: 1.2em 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: -0.2em 0;
    box-shadow: inset 0 .5em 0 0 #00000000;
  }
`;

const BlogPage = ({ data }) => {
  const blogPosts = data.allDevArticles.edges;
  return (
    <Layout shadowText="Blog" title="Here are all of my rambles">
      <SEO title="Blog" />
      <Container>
        <ContentContainer>
          <List>
            <CenterItem>
              <SpecialLink href={`https://dev.to/${blogPosts[0].node.article.user.username}`}>View blog over at DEV</SpecialLink>
            </CenterItem>
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
              )
            })}
          </List>
        </ContentContainer>
      </Container>
    </Layout>
  );
}

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
`

export default BlogPage
