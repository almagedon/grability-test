import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';
import MarveLogo from '../../../assets/img/Marvel-logo.png';
import TextField from 'material-ui/TextField';
import {grey900} from 'material-ui/styles/colors';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import './Menu.scss';
import IconButton from 'material-ui/IconButton';


var styles = {
    backgroundColor: grey900,
    boxShadow: '0px 1px 24px 1px rgba(0,0,0,0.75)'
};
var stylesimg = {
    width:'100%',
};

export default class Menu extends Component {
  render() {
    return (
      <Row middle="xs" style={styles}> 
        <Col xs={2}>
          <Row center="xs"> 
            <Col xs={12} className='Menu-logo'>
              <img style={stylesimg} src={ MarveLogo } alt='Marvel'/>
            </Col>
          </Row> 
        </Col>
        <Row center="xs" > 
            <Col xs={3} >
              <div className="box">
                <div className="container-4">
                  <input type="search" id="search" placeholder="Search character..." />
                  <button className="icon"><i className="fa fa-search"> </i></button>
                </div>
              </div>
            </Col>
        </Row> 
      </Row>
    );
  }
}

