import React from 'react';
import ReactDOM from 'react-dom';
import resumeSchema from 'resume-schema';

import App from './App';

const { validate, schema } = resumeSchema;

const element = document.getElementById('content');
ReactDOM.render(<App validate={validate} schema={schema} />, element);

document.body.classList.remove('loading');
