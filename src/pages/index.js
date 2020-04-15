import React from "react"
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout"
import { Text } from "../components/typography";
import SEO from "../components/seo"
import { Contact } from "../components/contact";
import me from "../images/me.jpg"

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
  align-items: flex-start;
  flex: 1;
  text-align: left;
  width: 100%;
`;

const DescriptionContainer = styled.div`
  max-width: 500px;
  text-align: flex-start;
  margin-top: 16px;
`;

const Navlink = styled(Link)`
  padding: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  letter-spacing: -0.07em;
  line-height: 1;
  font-weight: bold;
  color: #011627;
  z-index: 1;
  width: 100%;
  text-align: left;

  :not(last-child) {
    margin-right: 32px;
    @media (max-width: 700px) {
      margin-bottom: 24px;
    margin-right: 0
  }
  }

  &:hover {
    color: ${p => p.theme.typography.headerColour};
  }
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
  :not(:first-child) {
    margin-top: 8px;
  }
`;

const Image = styled.img`
  height: auto:
  width: 90%;
  max-width: 280px;
  margin-bottom: 24px;
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <ContentContainer>
          <Image src={me} />
          <Title>I'm Joe</Title>
          <DescriptionContainer>
            <InfoText>
              Javascript Engineer & all round creator
            </InfoText>
            <InfoText>
              Raised in Dorset. Live in London.
            </InfoText>
            <InfoText>
              I make things and ramble on about them.
            </InfoText>
            <InfoText>
              If I'm not coding, I'm usually cooking, gaming, looking at dogs on the internet, or fighting the urge to buy Lego.
            </InfoText>
          </DescriptionContainer>
      <Nav>
        <Navlink to="/projects" margin="16px 0 16px 0">Projects</Navlink>
        <Navlink to="/blog">Rambles</Navlink>
      </Nav>
        <Contact />
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
