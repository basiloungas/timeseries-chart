import React from 'react';
import {Provider} from 'react-redux';
import {
  Switch,
  Redirect,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import buildStore from './store';

import Layout from './components/layout';
import Homepage from './pages/homepage';

import './styled';

const store = buildStore();

export default () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);
