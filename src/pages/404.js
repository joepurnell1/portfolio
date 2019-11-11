import React from 'react';
import styled from 'styled-components';
import Image from '../components/image';
import { Header, Text } from '../components/typography';
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

const PaddedHeader = styled(Header)`
  margin-bottom: 16px;
`;

const PaddedText = styled(Text)`
  margin: 25px 0 25px 0;
  font-size: 1.5em;
`;

const Page = () => (
  <Layout withFooter={false}>
    <Container>
      <PaddedHeader>Oh Man!</PaddedHeader>
      <Image
        imageSource={Surprise}
        imageAlt="Surprise Image"
        height="6em"
        width="6em"
      />
      <PaddedText colour={theme.Global.textColour} strong>
        Seems like the page you&apos;re looking for cannot be found!
      </PaddedText>
    </Container>
  </Layout>
);

export default Page;
