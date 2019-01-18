import React, { Component } from 'react';

import {
  Box,
  Grommet,
  Stack,
} from 'grommet';

import Resume from './components/Resume';
import Header from './components/Header';
import Editor from './components/Editor';
import Sidebar from './components/Sidebar';
import placeholderResume from './defaultResume.json'

const theme = {};

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
    const schemaString = JSON.stringify(schema, null, 4);

    const { setData } = this;
    const data = this.state.data;

    return (

      <AppContext.Provider
        value={{ data, setData }}
      >
        <Grommet theme={theme} full>
          <Box fill>
            <Header showSidebar={this.state.showSidebar} toggleSidebar={this.toggleSidebar} togglePreview={this.togglePreview} />
              <Sidebar
                content={schemaString}
                isOpen={this.state.showSidebar}
              />
            <AppContext.Consumer>
              {({ data, setData }) => (

                <Editor {...this.props} data={data} setData={setData} validate={validate} />
              )}
            </AppContext.Consumer>

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
        </Grommet>
      </AppContext.Provider>
    );
  }
}

export default App;
