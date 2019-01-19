import React, { Component } from 'react';

import {
  Box,
  Grid,
  Grommet,
} from 'grommet';

import Resume from './Resume';
import Header from './Header';
import Editor from './Editor';
import placeholderResume from '../util/defaultResume.json'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    }
  },
};

const defaultValue = {
  isValid: true,
  inputValue: placeholderResume.toString(),
  value: placeholderResume,
  message: '',
  setData: () => (null),
};

export const AppContext = React.createContext(defaultValue);

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showSidebar: true,
      showPreview: false,
      data: {
        isValid: true,
        value: placeholderResume,
        inputValue: JSON.stringify(placeholderResume, null, 4),
        message: '',
      },
    };

    this.togglePreview = this.togglePreview.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);

    this.setData = (data) => {
      this.setState({
        ...this.state,
        data,
      });
    };
  }

  toggleSidebar() {
    const oldState = this.state;
    if (oldState.showSidebar) {
      this.setState({ ...oldState, showSidebar: false });
      return;
    }
    this.setState({
      ...oldState, showPreview: false, showSidebar: true, showEditor: true,
    });
  }

  togglePreview() {
    const oldState = this.state;
    if (oldState.showPreview) {
      this.setState({ ...oldState, showPreview: false, showEditor: true });
      return;
    }
    this.setState({
      ...oldState, showPreview: true, showSidebar: false, showEditor: false,
    });
  }

  render() {
    const { validate, schema } = this.props;

    const { setData } = this;
    const data = this.state.data;

    return (
      <AppContext.Provider value={{ data, setData }}>
        <Grommet theme={theme} full>
          <Grid
            fill
            rows={["auto", "flex"]}
            columns={["1/2", "1/2"]}
            areas={[
              { name: "header", start: [0, 0], end: [2, 0] },
              { name: "editor", start: [0, 1], end: [1, 1] },
              { name: "preview", start: [1, 1], end: [2, 1] }
            ]}
          >
            <Box
              gridArea="header"
              direction="row"
              align="center"
              justify="between"
              pad={{ horizontal: "none", vertical: "none" }}
              background="light-3"
            >
              <Header showSidebar={this.state.showSidebar} toggleSidebar={this.toggleSidebar} togglePreview={this.togglePreview} />
            </Box>

              <Box gridArea="editor" direction="row" flex fill>

                <AppContext.Consumer>
                  {({ data, setData }) => (
                    <Editor {...this.props} data={data} setData={setData} validate={validate} schema={schema} />
                  )}
                </AppContext.Consumer>
              </Box>
              <Box gridArea="preview" justify="center" align="center">
                <AppContext.Consumer>
                  {({ data }) => (
                    <Resume
                      visible={this.state.showPreview}
                      onClickOutside={this.togglePreview} {...this.props}
                      data={data}
                    />
                  )}
                </AppContext.Consumer>
              </Box>
          </Grid>
        </Grommet>
      </AppContext.Provider>
    );
  }
}

export default App;
