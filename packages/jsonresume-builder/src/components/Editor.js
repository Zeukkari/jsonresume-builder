import React, { Component } from 'react'

import ace from 'brace'
import 'brace/mode/json'
import 'brace/theme/monokai'

import Ajv from 'ajv'
import draft4 from 'ajv/lib/refs/json-schema-draft-04.json'

import { JsonEditor as Editor } from 'jsoneditor-react'
import 'jsoneditor-react/es/editor.min.css'

import defaultResume from '../util/defaultResume'

const style = {
  width: '100%',
  height: '100%',
}

export function Decorator({ children }) {
  return <div style={style}>{children}</div>
}

const ajv = new Ajv({ schemaId: 'id' })
ajv.addMetaSchema(draft4)

class ResumeJsonInput extends Component {
  constructor(props) {
    super(props)
  }

  onChange = resumeObject => {
    this.setState(resumeObject)
    const cb = (err, valid) => {
      if (err != undefined || valid == undefined) {
        const message =
          err && err.message ? err.message : 'Generic error message'
        this.props.setData({ isValid: false, value: { error: message } })
        return
      }
      this.props.setData({
        isValid: true,
        value: resumeObject,
      })
    }

    this.props.validate(resumeObject, cb)
    return
  }

  render() {
    return (
      <Decorator>
        <Editor
          value={defaultResume}
          onChange={this.onChange}
          mode={Editor.modes.code}
          ajv={ajv}
          validate
          ace={ace}
          schema={this.props.schema}
        />
      </Decorator>
    )
  }
}

export default ResumeJsonInput
