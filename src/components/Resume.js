import React from 'react';

import {
  Box,
  Heading,
  Layer,
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
    <div>
      <p>name: {name}</p>
      <p>label: {label}</p>
      <p>summary: {summary}</p>
      <p>email: {email} </p>
      <p>website: {website}</p>
    </div>
  );
};

const WorkEntry = ({
  company, position, startDate, endDate, summary, highlights,
}) => (
  <div>
    <p>company: {company} </p>
    <p>position: {position}</p>
    <p>startDate: {startDate}</p>
    <p>endDate: {endDate}
    </p>
    <p>summary: {summary}</p>
    <ul>
      {highlights.map(item => <li key={item}>{item}</li>)}
    </ul>
  </div>
);

const Work = ({ worklist }) => (
  <div>
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
  </div>
);

const SkillsEntry = ({ name, level, keywords }) => (
  <div key={name}>
    <p>
name:
      {name}
    </p>
    <p>
level:
      {level}
    </p>
    <ul>
      {keywords.map(item => <li key={item}>{item}</li>)}
    </ul>
  </div>
);

const Skills = ({ skills }) => (
  <div>
    {skills.map(item => (
      <SkillsEntry
        key={item.name}
        level={item.level}
        keywords={item.keywords}
      />
    ))}
  </div>
);

const PreviewResume = (props) => {
  if (!props.data.isValid) {
    return (
      <Box
        flex
        full
        justify="center"
        wrap={false}
        height="medium"
        overflow="scroll"
        border={{ color: 'brand', size: 'medium' }}
      >
        <Heading>Error rendering</Heading>
      </Box>
    );
  }

  const actualData = JSON.parse(props.data.value);

  console.log('actualData: ', actualData);

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
    <Layer
      full
      margin="large"
      position={props.visible ? 'center' : 'hidden'}
      onClickOutside={props.onClickOutside}
    >
      <Box flex overflow="scroll" border={{ color: 'brand', size: 'medium' }}>
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
    </Layer>
  );
};

export default PreviewResume;