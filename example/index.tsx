import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Container } from './components/Container';
import { Inputs } from './components/Inputs';
import { Surfaces } from './components/Surfaces';
import { Typography } from './components/Typography';
import { Progress } from './components/Progress';
import { Navigation } from './components/Navigation';
import { Feedback } from './components/Feedback';

const App = () => {
  return (
    <Container>
      <Feedback />
      <Inputs />
      <Surfaces />
      <Navigation />
      <Typography />
      <Progress />
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
