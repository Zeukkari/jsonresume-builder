import React, { Component } from 'react'

import { Box, Grid, Grommet } from 'grommet'

import toPDF from './Printable/PrintButton'

import Resume from './Resume'
import Header from './Header'
import EditorComponent from './Editor'
import defaultResume from '../util/defaultResume.json'
import './fixAce.css'

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
    this.toggleMenu = this.toggleMenu.bind(this)

    this.resumeRef = React.createRef()

    this.state = {
      data: {
        isValid: true,
        value: defaultResume,
        message: '',
      },
      showMenu: false,
    }

    this.setData = data => {
      this.setState({
        ...this.state,
        data,
      })
    }
  }

  toggleMenu() {
    this.setState({
      ...this.state,
      showMenu: !this.state.showMenu,
    })
  }

  render() {
    const { validate, schema } = this.props

    const { setData } = this
    const data = this.state.data

    return (
      <AppContext.Provider value={{ data, setData }}>
        <Grommet theme={theme} full>
          <Box flex direction="column">
            <Header
              flex
              fill
              justify="center"
              generatePDF={() => toPDF(this.resumeRef, 'Resume')}
              toggleMenu={this.toggleMenu}
              showMenu={this.state.showMenu}
            />
            <Grid
              flex
              fill
              rows={['flex']}
              columns={['1/2', '1/2']}
              areas={[
                { name: 'editor', start: [0, 0], end: [1, 0] },
                { name: 'preview', start: [1, 0], end: [2, 0] },
              ]}
            >
              <Box gridArea="editor" direction="row" flex fill>
                <AppContext.Consumer>
                  {({ data, setData }) => (
                    <EditorComponent
                      schema={schema}
                      validate={validate}
                      data={data}
                      setData={setData}
                    />
                  )}
                </AppContext.Consumer>
              </Box>
              <Box
                flex
                fill
                gridArea="preview"
                pad={{ horizontal: 'none', vertical: 'none' }}
                margin={{ horizontal: 'none', vertical: 'none' }}
                ref={this.resumeRef}
              >
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
          </Box>
        </Grommet>
      </AppContext.Provider>
    )
  }
}

export default App
