import React from 'react';
import styled from 'styled-components';
import { Header, Text } from '../components/typography';
import Link from '../components/link';
import theme from '../styles/theme';
import Layout from '../components/layout';

const Container = styled('div')`
  background: ${props => props.backgroundColour};
  display: flex;
  min-height: 400px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 300px;
`;

const PaddedText = styled(Text)`
  margin: 25px 0 25px 0;
  font-size: 1.5em;
  color: ${p => p.colour}
`;

const Page = () => (
  <Layout withFooter={false}>
    <Container>
      <Header>Thanks for the submission</Header>
      <PaddedText colour={theme.Global.textColour} strong>
        I&apos;ll get back to you ASAP
      </PaddedText>
      <Link href="/">Head Home Again</Link>
    </Container>
  </Layout>
);

export default Page;
