import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../../atoms/text/header';
import Text from '../../atoms/text/text';

const ProjectCard = styled('a')`
  display: flex;
  flex: 0 0 25%;
  background-color: ${p => p.colour};
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  margin: 10px;
  min-height: 148px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 8px 0px;
  border: ${p => (p.colour || '1px solid rgba(0, 0, 0, 0.1)')};
  justify-content: space-between;
  text-decoration: none;
  min-width: 275px;

  :hover {
    box-shadow: ${p => p.href && 'rgba(0, 0, 0, 0.4) 3px 3px 8px 0px'};

    h1 {
      text-decoration: ${p => p.href && 'underline'};
    }
  }
`;

const StaticHeader = styled(Header)`
  transition: font-size 0.25s;
  font-size: 32px;
  color: #FFF;

  ${p => p.swellOn}:hover & {
    font-size: 3.25em;
  }
`;

const ProjectCardText = styled(Text)`
  font-size: 16px;
  font-weight: 100;
  color: #fff;
  padding-top: 8px;
`;

const Tags = styled.div`
  width: 100%;
  margin-top: 16px;
  max-height: 50px;
`;

const TagContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: flex-start;
  margin-top: 8px;
`;

const Tag = styled.div`
  background-color: ${p => (p.colour ? p.colour : '#FFF')};
  padding: 0 8px 0 8px;
  margin-right: 4px;
  border-radius: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 21px;
`;

const TagText = styled(Text)`
  font-size: 14px;
  color: ${p => p.textColour};
`;

const renderProjectTags = (tags, tagColour, tagTextColour) => (
  tags.map(tag => (
    <Tag key={tag} colour={tagColour}>
      <TagText textColour={tagTextColour}>{tag}</TagText>
    </Tag>
  ))
);

const renderProjectText = cardText => (
  cardText.map(text => (
    <ProjectCardText key={text.trim()}>
      {text}
    </ProjectCardText>
  ))
);

const renderProjects = ({
  backgroundColour,
  projectTitle,
  projectText,
  projectType,
  tags,
  textColour,
  tagColour,
  tagTextColour,
  href,
}) => (
  <ProjectCard key={projectTitle} colour={backgroundColour} href={href}>
    <div>
      <StaticHeader strong>{projectTitle}</StaticHeader>
      {renderProjectText(projectText, textColour)}
    </div>
    <Tags>
      <TagContainer pad>
        {renderProjectTags(tags, tagColour, tagTextColour)}
      </TagContainer>
      <TagContainer>
        <Tag colour="#D90368">
          <TagText textColour="#FFF">{projectType}</TagText>
        </Tag>
      </TagContainer>
    </Tags>
  </ProjectCard>
);

renderProjects.propTypes = {
  backgroundColour: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  textColour: PropTypes.string,
  tagColour: PropTypes.string,
  tagTextColour: PropTypes.string,
  projectTitle: PropTypes.string,
  projectText: PropTypes.arrayOf(PropTypes.string),
  projectType: PropTypes.string,
  href: PropTypes.string,
};

renderProjects.defaultProps = {
  backgroundColour: '',
  tags: [],
  textColour: '',
  tagColour: '',
  tagTextColour: '',
  projectTitle: '',
  projectText: [],
  projectType: 'Personal',
  href: null,
};

export default renderProjects;
