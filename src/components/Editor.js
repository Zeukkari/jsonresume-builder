import React, { Component } from 'react';

import {
  Box,
  Text,
  TextArea,
} from 'grommet';

class ResumeJsonInput extends Component {
  state = {
    value: '{}',
    isValid: true,
    message: '',
  };

  onChange = (event) => {
    const inputValue = event.target.value;
    let data = {};
    try {
      data = JSON.parse(event.target.value);
    } catch (e) {
      this.props.setData({
        isValid: false,
        message: 'invalid json',
        inputValue: inputValue,
        value: data,
      });
      return;
    }

    const cb = (err, valid) => {
      if (err != undefined || valid == undefined) {
        this.props.setData({ isValid: false, message: err[0].message, value: data });
        return;
      }
      this.props.setData({
        isValid: true,
        value: data,
        inputValue: inputValue
      });
    };
    this.props.validate(data, cb);
  }

  render() {
    const data = this.props.data || { isValid: false, message: 'foobar', value: 'foo' };

    const statusMessage = data && data.message ? data.message : 'seems legit'

    return (
      <Box width="large" height="medium" border={{ color: 'brand', size: 'medium' }}>

        {data && data.isValid ? (
          <Text style={{ color: 'green' }}>{statusMessage}</Text>
          ) : (
            <Text style={{ color: 'red' }}>{statusMessage}</Text>
          )
        }
        <TextArea
          fill
          value={data.inputValue}
          onChange={this.onChange}
        />
      </Box>
    );
  }
}

export default ResumeJsonInput;