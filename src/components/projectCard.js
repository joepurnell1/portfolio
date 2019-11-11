import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text, SmallText } from './typography';

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

const StaticHeader = styled(Text)`
  transition: font-size 0.25s;
  color: #FFF;
  font-size: 24px;
  margin-bottom: 4px;

  ${p => p.swellOn}:hover & {
    font-size: 26px;
  }
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

const renderProjectTags = (tags, tagColour, tagTextColour) => (
  tags.map(tag => (
    <Tag key={tag} colour={tagColour}>
      <SmallText colour={tagTextColour}>{tag}</SmallText>
    </Tag>
  ))
);

const renderProjects = ({
  backgroundColour,
  projectTitle,
  projectText,
  tags,
  textColour,
  tagColour,
  tagTextColour,
  href,
}) => (
  <ProjectCard key={projectTitle} colour={backgroundColour} href={href}>
    <div>
      <StaticHeader strong swellOn={ProjectCard}>{projectTitle}</StaticHeader>
      {projectText.map(text => (
        <SmallText key={text.trim()} colour={textColour}>
          {text}
        </SmallText>
      ))}
    </div>
    <Tags>
      <TagContainer pad>
        {renderProjectTags(tags, tagColour, tagTextColour)}
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
  href: null,
};

export default renderProjects;
