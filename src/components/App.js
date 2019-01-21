import React, { Component } from 'react'

import { Box, Grid, Grommet } from 'grommet'

import Resume from './Resume'
import Header from './Header'
import Editor from './Editor'
import defaultResume from '../util/defaultResume.json'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
}

const defaultValue = {
  isValid: true,
  value: defaultResume,
  setData: () => null,
}

export const AppContext = React.createContext(defaultValue)

class App extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      data: {
        isValid: true,
        value: defaultResume,
        message: '',
      },
    }

    this.setData = data => {
      this.setState({
        ...this.state,
        data,
      })
    }
  }

  render() {
    const { validate, schema } = this.props

    const { setData } = this
    const data = this.state.data

    return (
      <AppContext.Provider value={{ data, setData }}>
        <Grommet theme={theme} full>
          <Grid
            fill
            rows={['auto', 'flex']}
            columns={['1/2', '1/2']}
            areas={[
              { name: 'header', start: [0, 0], end: [2, 0] },
              { name: 'editor', start: [0, 1], end: [1, 1] },
              { name: 'preview', start: [1, 1], end: [2, 1] },
            ]}
          >
            <Box
              gridArea="header"
              direction="row"
              align="center"
              justify="between"
              pad={{ horizontal: 'none', vertical: 'none' }}
              background="light-3"
            >
              <Header />
            </Box>

            <Box gridArea="editor" direction="row" flex fill>
              <AppContext.Consumer>
                {({ data, setData }) => (
                  <Editor
                    {...this.props}
                    data={data}
                    setData={setData}
                    validate={validate}
                    schema={schema}
                  />
                )}
              </AppContext.Consumer>
            </Box>
            <Box gridArea="preview" justify="center" align="center">
              <AppContext.Consumer>
                {({ data }) => {
                  const {
                    basics,
                    work,
                    volunteer,
                    education,
                    awards,
                    publications,
                    skills,
                    languages,
                    interests,
                    references,
                    projects,
                  } = data.value
                  const isValid = data.isValid
                  return (
                    <Resume
                      basics={basics}
                      work={work}
                      volunteer={volunteer}
                      education={education}
                      awards={awards}
                      publications={publications}
                      skills={skills}
                      languages={languages}
                      interests={interests}
                      references={references}
                      projects={projects}
                      isValid={isValid}
                    />
                  )
                }}
              </AppContext.Consumer>
            </Box>
          </Grid>
        </Grommet>
      </AppContext.Provider>
    )
  }
}

export default App
