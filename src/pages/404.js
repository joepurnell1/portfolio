import React from 'react';
import styled from 'styled-components';
import Image from '../components/atoms/image';
import Header from '../components/atoms/text/header';
import Text from '../components/atoms/text/text';
import Link from '../components/link';
import ColouredContainer from '../components/atoms/layout/colouredContainer';
import Surprise from '../images/icons/surprise.svg';
import theme from '../styles/theme';
import Layout from '../components/layout';

const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  background-color: ${p => p.theme.Global.backgroundColour};
`;

const ShortColouredContainer = styled(ColouredContainer)`
  min-height: 300px;
`;

const PaddedText = styled(Text)`
  margin: 25px 0 25px 0;
  font-size: 1.5em;
`;

const Page = () => (
  <Layout>
    <div>
      <ShortColouredContainer backgroundColour={theme.Homepage.highlightedBackground}>
        <Header>Oh Man!</Header>
      </ShortColouredContainer>
      <Container>
        <Image
          imageSource={Surprise}
          imageAlt="Surprise Image"
          height="6em"
          width="6em"
        />
        <PaddedText colour={theme.Global.textColour} strong>
          Seems like the page you&apos;re looking for cannot be found!
        </PaddedText>
        <Link href="/" invert>Head Home Again</Link>
      </Container>
    </div>
  </Layout>
);

export default Page;
