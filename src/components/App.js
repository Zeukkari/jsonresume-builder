import React, { Component } from 'react'

import { Box, Grommet, Layer, Tabs, Tab } from 'grommet'

import toPDF from './Printable/PrintButton'

import Resume from './Resume'
import Header from './Header'
import EditorComponent from './Editor'
import defaultResume from '../util/defaultResume.json'

import customTheme from '../themes/tailored'

import { dark } from 'grommet/themes/dark'

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
      console.log('set state: ', data)
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

    console.log('customTheme: ', customTheme)

    return (
      <AppContext.Provider value={{ data, setData }}>
        <Grommet theme={dark} full>
          <Box flex direction="column">
            <Header
              flex
              fill
              justify="center"
              generatePDF={() => toPDF(this.resumeRef, 'Resume')}
              toggleMenu={this.toggleMenu}
              showMenu={this.state.showMenu}
            />
            <Tabs>
              <Tab title="Editor">
                <Box>
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
              </Tab>
              <Tab title="Preview">
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
                        />
                      )
                    }}
                  </AppContext.Consumer>
                </Box>
              </Tab>
            </Tabs>
          </Box>
        </Grommet>
      </AppContext.Provider>
    )
  }
}

export default App
