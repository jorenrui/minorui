import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Container } from './components/Container';
import { Surfaces } from './components/Surfaces';
import { Typography } from './components/Typography';
import { Progress } from './components/Progress';

const App = () => {
  return (
    <Container>
      <Surfaces />
      <Typography />
      <Progress />
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
