import React, { Component } from 'react'

import ace from 'brace'
import 'brace/mode/json'
import 'brace/theme/monokai'

import Ajv from 'ajv'
import draft4 from 'ajv/lib/refs/json-schema-draft-04.json'

import { JsonEditor as Editor } from 'jsoneditor-react'
import 'jsoneditor-react/es/editor.min.css'
import './fixAce.css'

import defaultResume from '../util/defaultResume'

const style = {
  width: '100%',
  height: '100%',
}

export function Decorator({ children }) {
  return <div style={style}>{children}</div>
}

class ResumeJsonInput extends Component {
  constructor(props, context) {
    super(props, context)
  }

  state = {
    value: '{}',
    inputValue: '{asdasd}',
    isValid: true,
    message: '',
  }

  onChange = event => {
    console.log('onChange: ', event)

    if (event.error !== false) {
      this.props.setData({
        isValid: false,
        value: {},
      })
      return
    }

    const resumeObject = event.jsObject

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
    const ajv = new Ajv({ schemaId: 'id' })
    ajv.addMetaSchema(draft4)

    /*
    <Editor
      value={defaultResume}
      theme="ace/theme/monokai"
      mode={Editor.modes.code}
      onChange={this.onChange}
      ace={ace}
      {...this.props}
    />
    */

    console.log('data: ', this.props.data)
    console.log('setData: ', this.props.setData)

    return (
      <Decorator>
        <Editor
          value={defaultResume}
          onChange={this.onChange}
          mode={Editor.modes.code}
          ajv={ajv}
          ace={ace}
          schema={this.props.schema}
        />
      </Decorator>
    )
  }
}

export default ResumeJsonInput
