import React from 'react';
import styled from 'styled-components';
import { Title } from './typography';
import LinkComp from './link';

const Container = styled.div`
  margin-top: 16px;
  max-width: 600px;

  :not(:last-child) {
    padding-bottom: 16px;
    border-bottom: 2px solid #002b4c33;
  }
`;

const Content = styled.div`
  p {
    font-size: 16px;
    font-family: Notosans;
    color: ${p => (p.colour ? p.colour : p.theme.typography.textColour)};
    margin: 0;
    padding: 0;
  }

  span {
    background-image: linear-gradient(to right, ${p => p.altColour}cc, ${p => p.altColour}80);
    background-position: 1.2em 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: -0.2em 0;
    box-shadow: inset 0 .5em 0 0 #00000000;
  }
`;

const StyledTitle = styled(Title)`
  margin-bottom: 4px;
  color: ${p => (p.theme.typography.textColour)};
  span {
    background-image: linear-gradient(to right, ${p => p.colour}cc, ${p => p.colour}80);
    background-position: 1.2em 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: -0.2em 0;
    box-shadow: inset 0 .5em 0 0 #00000000;
  }
`;

const Link = styled(LinkComp)`
  line-height: 2;
`;

export default ({ title, children, colour, altColour, link, linkText }) => {
  return (
    <Container>
      <StyledTitle as="h3" colour={colour}><span>{title}</span></StyledTitle>
      <Content altColour={altColour}>
        {children}
      </Content>
      {
        linkText && <Link href={link}>{linkText}</Link>
      }
    </Container>
  );
}
