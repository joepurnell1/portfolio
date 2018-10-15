import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const StyledDiv = styled.div`
  color: #BADA55;
`;

export default () => (
  <Layout headerLink="www.google.com">
    <StyledDiv>Hello world!</StyledDiv>
  </Layout>
);
