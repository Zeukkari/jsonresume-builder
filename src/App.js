import React, { Component } from 'react';

import {
  Box,
  Button,
  Collapsible,
  Heading,
  Layer,
  Grommet,
  Text,
  TextArea,
} from 'grommet';
import { Code, Contract, Expand } from 'grommet-icons';


const theme = {};

const defaultValue = {
  isValid: true,
  value: '{}',
  message: '',
  setData: () => (null),
}

const AppContext = React.createContext(defaultValue);

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    gridArea="header"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
    {...props}
  />
);

const SchemaReference = props => <TextArea value={props.value} {...props} fill readOnly />;

const Basics = ({ basics }) => {

  const name = basics.name || 'N/A'
  const label = basics.label || 'N/A'
  const summary = basics.summary || 'N/A'
  const email = basics.email || 'N/A'
  const website = basics.website || 'N/A'
  const picture = basics.picture || 'N/A'
  const profiles = basics.profiles || []


  return (
  <div>
    <p>name: {name}</p>
    <p>label: {label}</p>
    <p>summary: {summary}</p>
    <p>email: {email}</p>
    <p>website: {website}</p>
  </div>
  )
}

const WorkEntry = ({ company, position, startDate, endDate, summary, highlights }) => (
  <div>
    <p>company: {company}</p>
    <p>position: {position}</p>
    <p>startDate: {startDate}</p>
    <p>endDate: {endDate}</p>
    <p>summary: {summary}</p>
    <ul>
      {highlights.map(item =>
        <li key={item}>{item}</li>
      )}
    </ul>
  </div>
)

const Work = ({ worklist }) => (
  <div>
    {worklist.map(item =>
      <WorkEntry
        key={`${item.startDate}-${item.endDate}`}
        company={item.company}
        position={item.position}
        startDate={item.startDate}
        endDate={item.endDate}
        summary={item.summary}
        highlights={item.highlights}
      />
    )}
  </div>
)

const SkillsEntry = ({ name, level, keywords }) => (
  <div key={name}>
    <p>name: {name}</p>
    <p>level: {level}</p>
    <ul>
      {keywords.map(item =>
        <li key={item}>{item}</li>
      )}
    </ul>
  </div>
)

const Skills = ({ skills }) => {
  return (
    <div>
      {skills.map(item =>
        <SkillsEntry
          key={item.name}
          level={item.level}
          keywords={item.keywords}
        />
      )}
    </div>
  )
}

const PreviewResume = props => {
  if(!props.data.isValid) {
    return(
    <Box
      flex
      full
      justify="center"
      wrap={false}
      height="medium"
      overflow="scroll"
      border={{ color: 'brand', size: 'medium' }}>
      <Heading>Error rendering</Heading>
    </Box>
    )
  }

  const actualData = JSON.parse(props.data.value)

  console.log("actualData: ", actualData)

  const basics = actualData.basics;

  const work = actualData.work;

  const volunteer = actualData.volunteer;

  const education = actualData.education;

  const awards = actualData.awards;

  const publications = actualData.publications;

  const skills = actualData.skills;

  const languages = actualData.languages;

  const interests = actualData.interests;

  const references = actualData.references;

  const projects = actualData.projects;

  return (
  <Box flex overflow="scroll" border={{ color: 'brand', size: 'medium' }}>
    <Heading size="xlarge">Preview Resume</Heading>

    <Heading> Basics </Heading>

    {basics &&
      <Basics basics={basics} />
    }

    <Heading> Work </Heading>

    {work && (
      <Work worklist={work} />
      )
    }

    <Heading> Skills </Heading>
    {skills &&
      <Skills skills={skills} />
    }

    <Heading> Interests </Heading>
    {interests &&
      <div>placeholder</div>
    }
    <Heading> Education </Heading>
    {education &&
      <div>education</div>
    }

    <Heading> Languages </Heading>
    {languages &&
      <div>languages</div>
    }

    <Heading> Awards </Heading>
    {awards &&
      <div>awards</div>
    }

    <Heading> Projects </Heading>
    {projects &&
      <div>projects</div>
    }

    <Heading> Publications </Heading>
    {publications &&
      <div>publications</div>
    }

    <Heading> References </Heading>
    {references &&
      <div>references</div>
    }

    <Heading> Volunteer </Heading>
    {volunteer &&
      <div>volunteer</div>
    }
  </Box>
  );
}

/*
const ResumeJsonInput = () => (
  <AppState.Provider>
    {({ setData }) => (
      <Button
        style={styles.button}
        variant="raised"
        color="primary"
        onClick={() => openSnackbar('You clicked Button A!')}
      >
        Button A
      </Button>
    )}
  </AppState.Provider>
);
*/
class ResumeJsonInput extends Component {
  state = {
    value: '{}',
    isValid: true,
    message: '',
  };

  onChange = event => {
    let context = this.context;
    console.log("context: ", context)
    const inputValue = event.target.value;
    let data;
    try {
      data = JSON.parse(event.target.value);
    } catch(e) {
      this.props.setData({
        isValid: false,
        message: "invalid json",
        value: inputValue
      });
      return;
    }

    const cb = (err, valid) => {
      if(err != undefined || valid == undefined) {
        this.props.setData({ isValid: false, message: err[0].message, value: inputValue });
        return;
      };
      this.props.setData({isValid: true, value: inputValue});
      return;
    };
    this.props.validate(data, cb);

  }

  render() {

    console.log("render....", this.props)
    const data = this.props.data || { isValid: false, message: "foobar", value: "foo" };

    console.log("data: ", data)
    const label = data && data.isValid ? (
      <Text style={{color: 'green'}}>Input seems legit</Text>
    ) : (
      <Text style={{color: 'red'}}>Error: {data && data.message}</Text>
    );

    return (
      <Box width="large" height="medium" border={{ color: 'brand', size: 'medium' }}>
        {label}
        <TextArea value={data.value} onChange={this.onChange} fill />
      </Box>
    );
  }
}

const InsertJson = props => <TextArea value={props.value} {...props} fill readOnly />;

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      showSidebar: false,
      showPreview: false,
      showEditor: true,
      data: {
        isValid: true,
        value: '{}',
        message: '',
      }
    }

    this.togglePreview = this.togglePreview.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);

    this.setData = (data) => {
      console.log("setting state", data)
      this.setState({
        ...this.state,
        data: data
      })
    }

  }

  /*
  state = {
    showSidebar: false,
    showPreview: false,
    showEditor: true,
    data: {
      isValid: true,
      value: '{}',
      message: '',
    },
    setData: this.setData,
  }


  setData = data => {
    this.setState({...this.state, data})
  }
  */

  toggleSidebar() {
    console.log("toggle sidebar")
    const oldState = this.state;
    if(oldState.showSidebar) {
      this.setState({ ...oldState, showSidebar: false })
      return;
    }
    this.setState({ ...oldState, showPreview: false, showSidebar: true, showEditor: true })
  }

  togglePreview() {
    console.log("toggle preview")
    const oldState = this.state;
    if(oldState.showPreview) {
      this.setState({ ...oldState, showPreview: false, showEditor: true })
      return;
    }
    this.setState({ ...oldState, showPreview: true, showSidebar: false, showEditor: false })
  }

  render() {
    const { validate, schema } = this.props;
    const schemaString = JSON.stringify(schema, null, 4);
    const { showSidebar, showPreview, showEditor } = this.state;

    const { setData } = this;
    const data = this.state.data;


/*
      <AppState.Provider
        value={{
          setData: this.setData,
          isValid: this.isValid,
          message: this.message,
          value: this.value,
        }}
      >
      </AppState.Provider>
      */

    return (

      <AppContext.Provider
        value={{ data, setData }}
      >
      <Grommet theme={theme} full>
        <Box fill>
          <AppBar>
              <Heading level="3" margin="none">
                Resume Builder
              </Heading>
              <div>
                <Button
                  icon={this.state.showSidebar ? (<Contract color="white" />) : (<Expand color="white" />) }
                  onClick={this.toggleSidebar}
                />
                <Button
                  icon={<Code color="white" />}
                  onClick={this.togglePreview}
                />
              </div>
            </AppBar>
            <Box
              flex
              align='center'
              justify='between'
              direction='row'
            >
              <AppContext.Consumer>
                {({ data, setData }) => (
                  <ResumeJsonInput  {...this.props} data={data} setData={setData} />
                )}

              </AppContext.Consumer>
              <Collapsible direction="horizontal"  open={showSidebar}>
                <Box
                  flex
                  width='large'
                  background='light-2'
                  elevation='small'
                  align='stretch'
                  justify='between'
                >
                  <SchemaReference value={schemaString} />
                </Box>
              </Collapsible>
            </Box>
          </Box>
          <Box direction='row' flex overflow={{ horizontal: 'hidden' }} >
          <Layer
            full
            margin="large"
            position={showPreview ? 'center' : 'hidden'}
            onClickOutside={this.togglePreview}>
            <AppContext.Consumer>
              {({ data }) => (
                <PreviewResume  {...this.props} data={data} />
              )}
            </AppContext.Consumer>
          </Layer>
          </Box>

      </Grommet>
      </AppContext.Provider>
    );
  }
}

export default App;
