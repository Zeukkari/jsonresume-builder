import React from 'react';

import {
  Box,
  Paragraph,
} from 'grommet';


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

const Work = ({ work }) => (
  <Box>
    {work.map(item => (
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

export default Work;