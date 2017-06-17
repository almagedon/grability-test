import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';
import MarveLogo from '../../../assets/img/Marvel-logo.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import Search from './containers/Search'


var styles = {
    backgroundColor: '#2d2727',
    boxShadow: '0px 1px 24px 1px rgba(0,0,0,0.75)'
};
var stylesimg = {
  margin: '8.28px 0px 0px 0px',
  width:'120px'
};

export default class NavBar extends Component {
  render() {
    return (
      <AppBar 
        style={styles} 
        title={<Search />} 
        iconStyleLeft={stylesimg} 
        iconElementLeft={<img src={ MarveLogo } alt='Marvel'/>} 
      />
    );
  }
}