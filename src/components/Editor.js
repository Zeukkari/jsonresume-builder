import React, { Component } from 'react';

import {
  Box,
  Text,
  TextArea,
} from 'grommet';

import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';

import defaultResume from '../util/defaultResume'
class ResumeJsonInput extends Component {

  constructor(props, context){
    super(props, context);
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
        value: {},
      });
      return
    }

    const resumeObject = event.jsObject;

    const cb = (err, valid) => {
      if (err != undefined || valid == undefined) {
        const message = err && err.message ? err.message : 'Generic error message';
        this.props.setData({ isValid: false, value: { error: message } });
        return;
      }
      this.props.setData({
        isValid: true,
        value: resumeObject
      });
    };

    this.props.validate(resumeObject, cb);

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