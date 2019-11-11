import React from 'react';
import styled from 'styled-components';
import Header from '../components/atoms/text/header';
import Text from '../components/atoms/text/text';
import Link from '../components/link';
import ColouredContainer from '../components/atoms/layout/colouredContainer';
import theme from '../styles/theme';
import Layout from '../components/layout';

const ShortColouredContainer = styled(ColouredContainer)`
  min-height: 300px;
`;

const PaddedText = styled(Text)`
  margin: 25px 0 25px 0;
  font-size: 1.5em;
  color: ${p => p.colour}
`;

const Page = () => (
  <Layout>
    <div>
      <ShortColouredContainer backgroundColour={theme.Homepage.highlightedBackground}>
        <Header>Thanks for the submission</Header>
        <PaddedText colour={theme.Global.background} strong>
          I&apos;ll get back to you ASAP
        </PaddedText>
        <Link href="/">Head Home Again</Link>
      </ShortColouredContainer>
    </div>
  </Layout>
);

export default Page;
