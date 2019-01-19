import React from 'react';

import {
  Box,
  Heading,
} from 'grommet';

import Awards from './Awards'
import Basics from './Basics'
import Education from './Education'
import Interests from './Interests'
import Languages from './Languages'
import Publications from './Publications'
import Projects from './Projects'
import References from './References'
import Skills from './Skills'
import Volunteer from './Volunteer'
import Work from './Work'

const Resume = ({ basics, work, volunteer, education, awards, publications, skills, languages, interests, references, projects, isValid }) => {
  if (!isValid) {
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

  return (
      <Box flex fill overflow="scroll" border={{ color: 'status-ok', size: 'xlarge' }}>
        <Heading size="xlarge">Preview Resume</Heading>
        <Basics basics={basics} />
        <Work work={work}/>
        <Skills skills={skills} />
        <Interests interests={interests}/>
        <Education education={education}/>
        <Languages languages={languages}/>
        <Awards awards={awards}/>
        <Projects projects={projects}/>
        <Publications publications={publications}/>
        <References references={references}/>
        <Volunteer volunteer={volunteer}/>
      </Box>
  );
};

export default Resume;