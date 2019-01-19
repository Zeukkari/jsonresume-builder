import React, { Component } from 'react';

import {
  Box,
  Text,
  TextArea,
} from 'grommet';

import Ajv from 'ajv';
import JsonSchemaDraft4 from 'ajv/lib/refs/json-schema-draft-04';
import JSONInput from 'react-json-editor-ajrm';
import locale    from 'react-json-editor-ajrm/locale/en';


import defaultResume from '../util/defaultResume'



class ResumeJsonInput extends Component {

  constructor(props, context){
    super(props, context);

    const ajv = new Ajv({schemaId: 'auto', format: 'full'});
    ajv.addMetaSchema(JsonSchemaDraft4);

    const validate = ajv.compile(props.schema)

    this.validate = validate;

    this.onChange = this.onChange.bind(this);
  }

  state = {
    value: '{}',
    inputValue: '{asdasd}',
    isValid: true,
    message: '',
  };

  onChange = (event) => {
    if(event.error !== false) {
      console.log("onChange error", event.error);
      this.props.setData({
        isValid: false,
        message: 'invalid json',
        inputValue: event.plainText,
        value: data,
      });
      return
    }

    const data = event.jsObject;
    const isValid = this.validate(data)

    if(isValid) {
      this.props.setData({
        isValid: true,
        message: 'all good',
        inputValue: event.plainText,
        value: data,
      });
      return
    }
    return;
  }

  render() {
    return (
      <JSONInput
        id='editor-input'
        placeholder={defaultResume}
        locale={locale}
        height='100%'
        width='100%'
        onChange={this.onChange}
      />
    );
  }
}

export default ResumeJsonInput;