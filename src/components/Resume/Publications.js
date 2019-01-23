import React from 'react'

import { Box, Paragraph, Heading, Text } from 'grommet'

const Publications = ({ publications }) => {
  const renderItems = publications.map(item => {
    return (
      <Box key="item.company">
        <Heading>{item.name}</Heading>
        <Heading>{item.publisher}</Heading>
        <Text>{item.releaseDate}</Text>
        <Paragraph>{item.summary}</Paragraph>
      </Box>
    )
  })
  return (
    <Box margin="none" pad="none" border="all">
      <Box
        border={{
          side: 'all',
          color: 'red',
          size: 'xsmall',
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

Publications.defaultProps = {
  publications: [],
}

export default Publications
