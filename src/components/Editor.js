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

    const ajv = new Ajv({
      schemaId: 'id',
      allErrors: true,
      verbose: true,
      format: 'full',
      extendRefs: 'fail',
    })
    ajv.addMetaSchema(draft4)
    this.validate = ajv.compile(props.schema)

    this.onChange = this.onChange.bind(this)
    this.onError = this.onError.bind(this)
    this.onValidate = this.onValidate.bind(this)
    this.validate = this.validate.bind(this)
  }

  onError(event) {
    console.log('onError: ', event)
    return
  }

  onValidate(error, valid) {
    console.log('onValidate: ', error, valid, this)
    if (valid) {
      console.log('probably valid')
      this.props.setData({
        isValid: true,
        error: [],
        value: this.state.current,
        ...this.props.data,
      })
      return
    }

    if (error != undefined) {
      console.log('totally not valid')
      this.props.setData({
        isValid: false,
        error: error,
        ...this.props.data,
      })
      return
    }

    console.log('not valid')
    this.props.setData({
      isValid: false,
      ...this.props.data,
    })
    return
  }

  onChange(newState) {
    console.log('onChange: ', newState)
    console.log('this: ', this)
    this.state.currentState = newState
    this.props.validate(newState, this.onValidate)
  }

  render() {
    // console.log('data: ', this.props.data)
    // console.log('setData: ', this.props.setData)

    return (
      <Decorator>
        <Editor
          key={1}
          value={this.props.data.value}
          onChange={this.onChange}
          onError={this.onError}
          mode={Editor.modes.code}
          allowedModes={[
            Editor.modes.code,
            Editor.modes.tree,
            Editor.modes.view,
          ]}
          ace={ace}
          schemaRefs={this.props.schema}
          statusBar={true}
          history={true}
          theme="ace/theme/monokai"
          search={true}
        />
      </Decorator>
    )
  }
}

export default ResumeJsonInput
