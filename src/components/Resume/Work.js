import React from 'react'

import {
  Box,
  TableHeader,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
  Table,
  Heading,
  Text,
  Paragraph,
} from 'grommet'

const columns = [
  {
    property: 'company',
    header: <Text>Company</Text>,
    primary: true,
  },
  {
    property: 'website',
    header: 'Website',
  },
  {
    property: 'position',
    header: 'Position',
  },
  {
    property: 'startDate',
    header: 'Start',
  },
  {
    property: 'endDate',
    header: 'End',
  },
  {
    property: 'summary',
    header: 'Summary',
  },
  {
    property: 'highlights',
    header: 'Highlights',
  },
]

const Work = ({ work }) => {
  const renderItems = work.map(item => {
    return (
      <Box key="item.company">
        <Heading>{item.company}</Heading>
        <Box direction="row">
          {item.startDate} - {item.endDate}
        </Box>
        <Paragraph>{item.summary}</Paragraph>
        <Text>Highlights</Text>
        <Box direction="column">
          {item.highlights.map(highlight => (
            <Text key={highlight}>{highlight}</Text>
          ))}
        </Box>
      </Box>
    )
  })
  return (
    <Box margin="none" pad="none" border="all">
      <Box
        border={{
          side: 'all',
          color: 'red',
          size: 'large',
          style: 'dashed',
        }}
        margin="none"
        pad="none"
      >
        <Heading
          level={3}
          size="medium"
          align="center"
          alignSelf="center"
          textAlign="center"
          margin="none"
          pad="none"
        >
          <Text>Work</Text>
        </Heading>
        <Box>{renderItems}</Box>
      </Box>
    </Box>
  )
}

Work.defaultProps = {
  work: [],
}

export default Work
