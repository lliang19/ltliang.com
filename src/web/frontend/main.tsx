import { css } from '@emotion/core';
import { jssPreset, StylesProvider } from '@material-ui/core/styles';
import { create } from 'jss';

import React from 'react';
import ReactDOM from 'react-dom';

import PlaceholderContent from './components/PlaceholderContent';

import 'typeface-roboto';
import './base.css';

const styles = {
  App: css({
    '@media (min-width: 480px)': {
      padding: '0 5vw'
    },
    height: '100%',
    padding: '125px 5vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  })
};

const jss = create({
  ...jssPreset(),
  insertionPoint: 'jss-insertion-point'
});

const App = (): JSX.Element => (
  <StylesProvider jss={jss}>
    <div className="App" css={styles.App}>
      <PlaceholderContent />
    </div>
  </StylesProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
