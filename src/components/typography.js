import styled from 'styled-components';

export const Header = styled('h1')`
  font-size: 52px;
  font-family: Poppins;
  color: ${p => (p.colour ? p.colour : p.theme.typography.headerColour)};
  line-height: 1em;
  margin: ${p => (p.margin ? p.margin : 0)};
  padding: ${p => (p.padding ? p.padding : 0)};

  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const Text = styled('p')`
  font-size: 20px;
  font-weight: ${p => (p.strong && p.theme.typography.heavyWeight)};
  font-family: Notosans;
  color: ${p => (p.colour ? p.colour : p.theme.typography.textColour)};
  margin: ${p => (p.margin ? p.margin : 0)};
  padding: ${p => (p.padding ? p.padding : 0)};
  text-align: left;
`;

export const Title = styled(Text).attrs({
  as: 'h3',
})`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
`;

export const SmallText = styled(Text)`
  font-size: 14px;
  color: ${p => (p.colour ? p.colour : p.theme.typography.smallTextColour)};
`;
