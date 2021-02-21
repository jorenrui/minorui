import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Page } from './components/Page';
import { Containers } from './components/Containers';

const App = () => {
  return (
    <Page>
      <Containers />
    </Page>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
