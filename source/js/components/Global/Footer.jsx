import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';
import MarveLogo from '../../../assets/img/grability-logo.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';


var styles = {
    backgroundColor: '#2d2727',
    fontSize: '0.8em'
};
var stylesimg = {
  width:'120px',
  margin: '8.28px 0px 0px 0px',
};
var stylesTitle = {
  fontSize: '0.8em'
};

export default class Footer extends Component {
  render() {
    return (
      <AppBar 
        style={styles}
        titleStyle={stylesTitle}
        title='Grability 2016 - Todos los derechos reservados' 
        iconStyleLeft={{visibility: 'hidden'}} 
        iconStyleRight={stylesimg} 
        iconElementRight={<img src={ MarveLogo } alt='Marvel'/>} 
      />
    );
  }
}