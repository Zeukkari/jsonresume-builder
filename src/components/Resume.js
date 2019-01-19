import React from 'react';

import {
  Box,
  Heading,
  Paragraph,
  Text,
} from 'grommet';

const Basics = ({ basics }) => {
  const name = basics.name || 'N/A';
  const label = basics.label || 'N/A';
  const summary = basics.summary || 'N/A';
  const email = basics.email || 'N/A';
  const website = basics.website || 'N/A';
  // const picture = basics.picture || 'N/A';
  // const profiles = basics.profiles || [];


  return (
    <Box>
      <Paragraph>name: {name}</Paragraph>
      <Paragraph>label: {label}</Paragraph>
      <Paragraph>summary: {summary}</Paragraph>
      <Paragraph>email: {email} </Paragraph>
      <Paragraph>website: {website}</Paragraph>
    </Box>
  );
};

const WorkEntry = ({
  company, position, startDate, endDate, summary, highlights,
}) => (
  <Box>
    <Paragraph>company: {company} </Paragraph>
    <Paragraph>position: {position}</Paragraph>
    <Paragraph>startDate: {startDate}</Paragraph>
    <Paragraph>endDate: {endDate}
    </Paragraph>
    <Paragraph>summary: {summary}</Paragraph>
    <ul>
      {highlights.map(item => <li key={item}>{item}</li>)}
    </ul>
  </Box>
);

const Work = ({ worklist }) => (
  <Box>
    {worklist.map(item => (
      <WorkEntry
        key={`${item.startDate}-${item.endDate}`}
        company={item.company}
        position={item.position}
        startDate={item.startDate}
        endDate={item.endDate}
        summary={item.summary}
        highlights={item.highlights || []}
      />
    ))}
  </Box>
);

const SkillsEntry = ({ name, level, keywords }) => (
  <Box key={name}>
    <Paragraph>
name:
      {name}
    </Paragraph>
    <Paragraph>
level:
      {level}
    </Paragraph>
    <ul>
      {keywords.map(item => <li key={item}>{item}</li>)}
    </ul>
  </Box>
);

const Skills = ({ skills }) => (
  <Box>
    {skills.map(item => (
      <SkillsEntry
        key={item.name}
        level={item.level}
        keywords={item.keywords}
      />
    ))}
  </Box>
);

const PreviewResume = (props) => {
  if (!props.data.isValid) {
    return (
      <Box
        flex
        full
        fill
        justify="center"
        wrap={true}
        height="medium"
        overflow="scroll"
        border={{ color: 'status-error', size: 'large' }}
      >
        <Heading>Error rendering</Heading>
      </Box>
    );
  }

  const actualData = props.data.value;
  const basics = actualData.basics;
  const work = actualData.work;
  const volunteer = actualData.volunteer;
  const education = actualData.education;
  const awards = actualData.awards;
  const publications = actualData.publications;
  const skills = actualData.skills;
  const languages = actualData.languages;
  const interests = actualData.interests;
  const references = actualData.references;
  const projects = actualData.projects;

  return (
      <Box flex fill overflow="scroll" border={{ color: 'status-ok', size: 'xlarge' }}>
        <Heading size="xlarge">Preview Resume</Heading>

        <Heading> Basics </Heading>

        {basics
        && <Basics basics={basics} />
        }

        <Heading> Work </Heading>

        {work && (
        <Work worklist={work} />
        )
      }

        <Heading> Skills </Heading>
        {skills
        && <Skills skills={skills} />
      }

        <Heading> Interests </Heading>
        {interests
        && <div>placeholder</div>
      }
        <Heading> Education </Heading>
        {education
        && <div>education</div>
      }

        <Heading> Languages </Heading>
        {languages
        && <div>languages</div>
      }

        <Heading> Awards </Heading>
        {awards
        && <div>awards</div>
      }

        <Heading> Projects </Heading>
        {projects
        && <div>projects</div>
      }

        <Heading> Publications </Heading>
        {publications
        && <div>publications</div>
      }

        <Heading> References </Heading>
        {references
        && <div>references</div>
      }

        <Heading> Volunteer </Heading>
        {volunteer
        && <div>volunteer</div>
      }
      </Box>
  );
};

export default PreviewResume;