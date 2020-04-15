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
    font-weight: bold;
  }
`;

const StyledTitle = styled(Title)`
  margin-bottom: 4px;
  color: ${p => p.theme.typography.headerColour};
  font-size: 20px;
  span {
    font-weight: bold;
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
