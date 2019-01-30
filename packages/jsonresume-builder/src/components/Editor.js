import React, { Component } from 'react'

import { Box } from 'grommet'

import ace from 'brace'
import AceEditor from 'react-ace'
import 'brace/mode/json'
import 'brace/theme/monokai'
import 'brace/theme/github'
import 'brace/theme/tomorrow'
import 'brace/theme/kuroir'
import 'brace/theme/twilight'
import 'brace/theme/xcode'
import 'brace/theme/textmate'
import 'brace/theme/solarized_dark'
import 'brace/theme/solarized_light'
import 'brace/theme/terminal'

import Ajv from 'ajv'
import draft4 from 'ajv/lib/refs/json-schema-draft-04.json'

import { schema } from 'resume-schema'

class ResumeJsonInput extends Component {
  constructor(props) {
    super(props)

    this.ajv = new Ajv({
      schemaId: 'id',
      allErrors: true,
      verbose: true,
      format: 'full',
    })
    this.ajv.addMetaSchema(draft4)

    this.editorRef = React.createRef()

    this.onChange = this.onChange.bind(this)
  }

  onChange = event => {
    console.log('onChange event')
    // console.log('newValue: ', event)

    const editor = this.editorRef.current.editor
    console.log('editor : ', editor)

    try {
      const newValue = JSON.parse(event)

      const valid = this.ajv.validate(schema, newValue)
      if (!valid) {
        throw errors
        const errors = this.ajv.errors
        throw errors
      }
    } catch {
      throw 'invalid json'
    }
  }

  render() {
    const { value } = this.props
    const userInput = JSON.stringify(value, null, 2)

    return (
      <Box flex direction="column">
        <Box background="dark-1">Statusbar</Box>
        <AceEditor
          ref={this.editorRef}
          mode="json"
          theme="monokai"
          onChange={this.onChange}
          name="UNIQUE_ID_OF_DIV"
          value={userInput}
          fontSize="24"
          width="100%"
          showGutter={true}
          editorProps={{ $blockScrolling: true }}
        />
      </Box>
    )
  }
}

export default ResumeJsonInput
