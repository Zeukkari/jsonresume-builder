import React, { Component } from 'react'

import { Box, Button, Heading, FormField, Select } from 'grommet'

import { Contract, Expand, Download, Menu } from 'grommet-icons'

const dummyThemes = ['default', 'elegant', 'paper', 'flat', 'modern']
const typeOptions = ['html', 'png', 'pdf']

class FormFieldSelect extends Component {
  state = { value: '', options: dummyThemes, typeOptions: typeOptions }

  render() {
    const { value, options } = this.state
    return (
      <Box
        gridArea="header"
        flex
        direction="row"
        align="center"
        justify="between"
        alignContent="between"
        margin={{ vertical: 'none' }}
        pad={{ horizontal: 'none', vertical: 'none' }}
        background="light-3"
      >
        <FormField label="Theme" htmlFor="select" {...this.props}>
          <Select
            id="select"
            placeholder="placeholder"
            options={options}
            value={value}
            onChange={({ option }) => this.setState({ value: option })}
          />
        </FormField>
        <FormField label="Output type" htmlFor="select" {...this.props}>
          <Select
            id="select"
            placeholder="placeholder"
            options={typeOptions}
            value={value}
            onChange={({ option }) => this.setState({ value: option })}
          />
        </FormField>
      </Box>
    )
  }
}

const Header = props => (
  <Box
    background="dark-2"
    direction="row"
    justify="between"
    pad={{ top: 'medium', horizontal: 'large' }}
  >
    <Box direction="row">
      <Button icon={<Menu color="white" />} onClick={props.toggleMenu} />
      <Heading level="3">Resume Builder</Heading>
    </Box>
    <Box direction="row">
      <Button
        icon={
          props.showSidebar ? (
            <Contract color="white" />
          ) : (
            <Expand color="white" />
          )
        }
        onClick={() => props.onClick}
        disabled
      />

      <Button icon={<Download color="white" />} onClick={props.generatePDF} />
    </Box>

    {props.showMenu && (
      <Box position={props.showMenu ? 'center' : 'hidden'}>
        <FormFieldSelect
          onClickOutside={props.toggleMenu}
          onEsc={props.toggleMenu}
        />
      </Box>
    )}
  </Box>
)

export default Header
