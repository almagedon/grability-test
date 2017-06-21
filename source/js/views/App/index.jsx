import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { hideModal } from 'actions/appModalData';
import HeroModal from 'components/Containers/HeroModal';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';

import Dashboard from 'views/Dashboard';
import NotFound from 'views/NotFound';
import NavBar from 'components/Global/NavBar';
import Footer from 'components/Global/Footer';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
};

@connect(state => ({
  asyncData: state.app.get('asyncData'),
  open: state.app.get('modal'),
}), {hideModal})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Row>
            <Col xs={12} md={12}>
              <div className='App'>
                <NavBar />
                  <div className='Page'>
                    <Switch>
                      <Route exact path={ publicPath } component={ Dashboard } />
                      <Route path='*' component={ NotFound } />
                    </Switch>
                  </div>
                <Row bottom="xs" bottom="md">
                  <Footer />
                </Row>
                <HeroModal closeModal={this.props.hideModal} openModal={this.props.open} />
              </div>
            </Col>
          </Row>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}
