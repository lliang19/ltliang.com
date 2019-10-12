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
    height: '100%',
    padding: '150px 5vw',
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

const App = () => {
  return (
    <StylesProvider jss={jss}>
      <div className="App" css={styles.App}>
        <PlaceholderContent />
      </div>
    </StylesProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
