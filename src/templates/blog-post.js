import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { SmallText } from "../components/typography";
import Prism from "prismjs";

import "./code-styles.css";

const Content = styled.article`
  width: 90%;
  max-width: 650px;

  font-size: 20px;
  font-family: Notosans;
  color: ${(p) => p.theme.typography.textColour};

  h3,
  h2,
  h1 {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
  }

  h2 {
    font-size: 20px;
  }

  h2 {
    font-size: 24px;
  }

  a {
    color: ${(p) => p.theme.typography.link.specialColour};
  }

  a:hover {
    color: ${(p) => p.theme.typography.link.standardColour};
  }

  @media (min-width: ${(p) => p.theme.breakpoints.large}) {
    width: 65%;
  }

  img {
    width: 100%;
    height: auto;

    @media (min-width: ${(p) => p.theme.breakpoints.large}) {
      width: 75%;
    }
  }
`;

const Info = styled.div`
  width: 90%;
  max-width: 700px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 16px;
  margin-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 16px;

  border-top: 2px solid #002b4c33;
  border-bottom: 2px solid #002b4c33;

  @media (min-width: ${(p) => p.theme.breakpoints.large}) {
    width: 65%;
  }
`;

const SpecialLink = styled.a`
  font-family: Notosans;
  color: #011627;
  font-weight: ${(p) => p.theme.typography.heavyWeight};
  &:hover {
    color: ${(p) => p.theme.typography.link.specialColour};
  }
  margin-bottom: 8px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;

const Tag = styled(SmallText)`
  padding: 2px 8px;
  margin-right: 8px;
  background-color: ${(p) => p.theme.tag.colours[p.colourindex]};
  color: #fff;
  border-radius: 2.5px;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  font-size: 4.5rem;
  letter-spacing: -0.06em;
  line-height: 1;
  font-weight: bold;
  color: #011627;
  z-index: 1;
  width: 90%;
  text-align: left;
  margin-bottom: 36px;
  max-width: 700px;

  @media (max-width: ${(p) => p.theme.breakpoints.medium}) {
    font-size: 3rem;
  }

  @media (min-width: ${(p) => p.theme.breakpoints.large}) {
    width: 65%;
  }
`;

export default ({
  data: {
    devArticles: { article },
  },
}) => {
  React.useEffect(() => {
    Prism.highlightAll();
  });

  const newArt = article.body_html.replace(
    new RegExp('<pre class="highlight ', "g"),
    '<pre class="language-'
  );

  return (
    <Layout>
      <SEO lang="EN" title={article.title} description={article.description} />
      <Title>{article.title}</Title>
      <Content
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: newArt }}
      />
      <Info>
        <SpecialLink href={article.url}>View post over at DEV</SpecialLink>
        <SmallText colour="#808080" strong>
          Published: {article.published_at}
        </SmallText>
        <TagContainer>
          {article.tags.map((tag, index) => {
            const colourindex = index > 4 ? index % 5 : index;

            return (
              <Tag key={tag} colourindex={colourindex}>
                #{tag}
              </Tag>
            );
          })}
        </TagContainer>
      </Info>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    devArticles(id: { eq: $id }) {
      article {
        title
        body_html
        url
        published_at(formatString: "DD-MMM-YY")
        tags
        description
      }
    }
  }
`;
