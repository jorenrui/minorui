import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Separator } from '../dist';
import { Container } from './components/Container';
import { Inputs } from './components/Inputs';
import { Surfaces } from './components/Surfaces';
import { Typography } from './components/Typography';
import { Progress } from './components/Progress';
import { Navigation } from './components/Navigation';
import { Feedback } from './components/Feedback';
import { DataDisplay } from './components/DataDisplay';

const App = () => {
  return (
    <Container>
      <Feedback />
      <Separator />
      <Inputs />
      <Separator />
      <DataDisplay />
      <Separator />
      <Surfaces />
      <Separator />
      <Navigation />
      <Separator />
      <Typography />
      <Separator />
      <Progress />
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
