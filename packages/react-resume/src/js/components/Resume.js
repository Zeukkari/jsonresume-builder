import React, { Component } from 'react'

import { validate } from 'resume-schema'
import { Box, Heading } from 'grommet'

import { Awards } from './Awards'
import { Summary, Picture, Contact } from './Basics'
import { Education } from './Education'
import { Interests } from './Interests'
import { Languages } from './Languages'
import { Publications } from './Publications'
import { References } from './References'
import { Skills } from './Skills'
import { Volunteer } from './Volunteer'
import { Work } from './Work'

import {
  ResumeLayout,
  TopLayout,
  LeftColumnLayout,
  RightColumnLayout,
} from './Layout'

const Loading = () => (
  <Box margin="auto" align="center" justify="center" height="full" width="full">
    Spinning loader
  </Box>
)

class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = { isValid: false, error: undefined }
  }

  componentDidMount() {
    const {
      work,
      basics,
      volunteer,
      education,
      awards,
      publications,
      skills,
      languages,
      interests,
      references,
    } = this.props

    const resumeData = {
      work,
      basics,
      volunteer,
      education,
      awards,
      publications,
      skills,
      languages,
      interests,
      references,
    }

    const cb = (error, report) => {
      console.log('error: ', error)
      console.log('report: ', report)
      if (error) {
        this.setState({ isValid: false, error: error })
      } else {
        this.setState({ isValid: true, error: undefined })
      }
      return
    }
    validate(resumeData, cb)
  }

  render() {
    const {
      work,
      basics,
      volunteer,
      education,
      awards,
      publications,
      skills,
      languages,
      interests,
      references,
    } = this.props

    console.log('work: ', work)

    if (this.state.isValid) {
      const {
        name,
        label,
        picture,
        email,
        phone,
        website,
        summary,
        location,
        profiles,
      } = basics

      return (
        <ResumeLayout>
          <TopLayout>
            {picture && (
              <Box align="center" justify="center">
                <Picture picture={picture} />
              </Box>
            )}

            <Summary name={name} label={label} summary={summary} />

            <Contact
              email={email}
              phone={phone}
              website={website}
              location={location}
              profiles={profiles}
            />
          </TopLayout>

          <LeftColumnLayout>
            {work.length > 0 && (
              <Box>
                <Work work={work} />
              </Box>
            )}

            {education.length > 0 && (
              <Box>
                <Education education={education} />
              </Box>
            )}
          </LeftColumnLayout>

          <RightColumnLayout>
            {skills.length > 0 && (
              <Box>
                <Skills skills={skills} />
              </Box>
            )}

            {interests.length > 0 && (
              <Box>
                <Interests interests={interests} />
              </Box>
            )}

            {awards.length > 0 && (
              <Box>
                <Awards awards={awards} />
              </Box>
            )}

            {volunteer.length > 0 && (
              <Box>
                <Volunteer volunteer={volunteer} />
              </Box>
            )}

            {publications.length > 0 && (
              <Box>
                <Publications publications={publications} />
              </Box>
            )}

            {languages.length > 0 && (
              <Box>
                <Languages languages={languages} />
              </Box>
            )}

            {references.length > 0 && (
              <Box>
                <References references={references} />
              </Box>
            )}
          </RightColumnLayout>
        </ResumeLayout>
      )
    } else if (this.state.error) {
      const errorMessage =
        this.state.error && this.state.error[0].message
          ? this.state.error[0].message
          : 'not sure what went wrong'
      return (
        <Box
          flex
          fill
          justify="center"
          wrap={true}
          height="medium"
          overflow="scroll"
          border={{ color: 'status-error', size: 'large' }}
        >
          <Heading>`Error: ${errorMessage}`</Heading>
        </Box>
      )
    } else {
      return <Loading />
    }
  }
}

export { Loading, Resume }
